import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";
import * as GenStyle from "../../global/GeneralStyled";
import { formatBRL } from "../../constants/FormatBRL";
import { GlobalContext } from "../../global/GlobalContext";
import TableOrderList from "../../components/TableOrderList/TableOrderList";
import PostOrder from "../../services/PostOrder";
import { filterOrderBy } from "../../services/filterOrderBy";
import Loading from "../../components/Loading/Loading";

export default function OrderPage() {
  const { data, orderList, setOrderList, form, onChange, clearForm } =
    useContext(GlobalContext);
  const [products, setProducts] = useState(undefined);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const today = new Date().toISOString().slice(0, 10);

  const onSubmitOrder = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (orderList.length) {
      const body = {
        customer_name: form.customer_name,
        delivery_date: form.delivery_date,
        products: orderList,
      };
      const result = await PostOrder(body);
      if (result.success) {
        alert("Pedido realizado com sucesso!");
        setOrderList([]);
        clearForm();
      } else {
        const message =
          result.error.response.data.message || result.message;
        alert(message);
      }
    } else {
      alert("Nenhum produto foi escolhido!");
    }
    setIsLoading(false);
  };

  const calculatedTotal = () => {
    if (orderList?.length) {
      const resultTotal = orderList.reduce((total, item) => {
        const product = data?.filter(
          (product) => product.id === item.id_product
        )[0];
        return product?.price * item.amount + total;
      }, 0);

      return resultTotal;
    }
    return 0;
  };

  const filterBy = (name) => {
    const list = filterOrderBy(products, name, count);
    setProducts(list);
    setCount(count + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    if (data) {
      const list = orderList.map((product) => {
        const index = data.findIndex(({ id }) => id === product.id_product);
        return {
          id: product.id_product,
          name: data[index].name,
          price: data[index].price,
          amount: product.amount,
          qty_stock: data[index].qty_stock,
        };
      });
      setProducts(list);
      setIsLoading(false);
    }
  }, [data, orderList]);

  const total = calculatedTotal();

  return (
    <>
      <Header page={"order"} />
      {isLoading && <Loading />}
      <Style.Container>
        <GenStyle.DivSpace />
        <GenStyle.Title>Formulário de Pedidos</GenStyle.Title>
        <GenStyle.DivSpace />
        <Style.Form onSubmit={onSubmitOrder}>
          <Style.Label htmlFor="customer_name">Nome do Cliente</Style.Label>
          <Style.InputName
            id="customer_name"
            onChange={onChange}
            value={form.customer_name}
            placeholder="Nome do cliente"
            required
          />
          <Style.Label htmlFor="delivery_date">Data de Entrega</Style.Label>
          <Style.InputDate
            type={"date"}
            onChange={onChange}
            value={form.delivery_date}
            id="delivery_date"
            min={today}
            required
          />
          <GenStyle.DivSpace />
          <Style.TableOrder>
            <thead>
              <GenStyle.LineTable>
                <GenStyle.CellTableTitle onClick={() => filterBy("name")}>
                  Produto
                </GenStyle.CellTableTitle>
                <GenStyle.CellTableTitle onClick={() => filterBy("price")}>
                  Preço
                </GenStyle.CellTableTitle>
                <GenStyle.CellTableTitle onClick={() => filterBy("amount")}>
                  Quantidade
                </GenStyle.CellTableTitle>
              </GenStyle.LineTable>
            </thead>
            <tbody>
              {products?.length ? (
                products.map(({ id, name, price, amount, qty_stock }) => {
                  return (
                    <TableOrderList
                      orderList={orderList}
                      setOrderList={setOrderList}
                      product={{id,name,price,amount,qty_stock,}}
                      key={id}
                    />
                  );
                })
              ) : (
                <GenStyle.LineTable>
                  <Style.Empty>Lista vazia</Style.Empty>
                </GenStyle.LineTable>
              )}
            </tbody>
            <tfoot>
              <Style.LineTableTotal>
                <Style.TdTotalTitle>VALOR TOTAL</Style.TdTotalTitle>
              </Style.LineTableTotal>
              <Style.LineTableTotal>
                <Style.TdTotal>
                  {total.toLocaleString("pt-BR", formatBRL)}
                </Style.TdTotal>
              </Style.LineTableTotal>
            </tfoot>
          </Style.TableOrder>
          <GenStyle.DivSpace />
          <Style.DivButtonsForm>
            <Style.ButtonClearList
              onClick={() => setOrderList([])}
              type="button"
            >
              Limpar Lista de Produtos
            </Style.ButtonClearList>
            <Style.Button type="submit">Finalizar Pedido</Style.Button>
          </Style.DivButtonsForm>
        </Style.Form>
        <GenStyle.DivSpace />
      </Style.Container>
      <Footer />
    </>
  );
}
