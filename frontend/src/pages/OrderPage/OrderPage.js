import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";
import * as GenStyle from "../../global/GeneralStyled";
import { formatBRL } from "../../constants/FormatBRL";
import { useForm } from "../../hooks/useForm";

export default function OrderPage() {
  const today = new Date().toISOString().slice(0, 10);
  const { form, onChange, clearForm } = useForm({
    name: "",
    date: "",
  });
  const onSubmitOrder = (event) => {
    event.preventDefault();
    console.log("aaaa");
    // clearForm()
  };
  return (
    <>
      <Header page={"order"} />
      <Style.Container>
        <GenStyle.DivSpace />
        <GenStyle.Title>Formulário de Pedidos</GenStyle.Title>
        <GenStyle.DivSpace />
        <Style.Form onSubmit={onSubmitOrder}>
          <Style.Label htmlFor="name">Nome do Cliente</Style.Label>
          <Style.InputName
            id="name"
            onChange={onChange}
            value={form.name}
            placeholder="Nome do cliente"
            required
          />
          <Style.Label htmlFor="date">Data de Entrega</Style.Label>
          <Style.InputDate
            type={"date"}
            onChange={onChange}
            value={form.date}
            id="date"
            min={today}
            required
          />
          <GenStyle.DivSpace />
          <Style.TableOrder>
            <thead>
              <GenStyle.LineTable>
                <GenStyle.CellTableTitle>Produto</GenStyle.CellTableTitle>
                <GenStyle.CellTableTitle>Preço</GenStyle.CellTableTitle>
                <GenStyle.CellTableTitle>Quantidade</GenStyle.CellTableTitle>
              </GenStyle.LineTable>
            </thead>
            <tbody>
              {/* {products &&
            products.map((product) => {
              return <TableStock product={product} key={product.id} />;
            })} */}
              {"CARRINHO VAZIO" && (
                <GenStyle.LineTable>
                  <Style.Empty>Lista vazia</Style.Empty>
                </GenStyle.LineTable>
              )}
            </tbody>
            {"CARRINHO VAZIO" && (
              <tfoot>
                <Style.LineTableTotal>
                  <Style.TdTotal>VALOR TOTAL</Style.TdTotal>
                  <Style.TdTotal>
                    {(0).toLocaleString("pt-BR", formatBRL)}
                  </Style.TdTotal>
                </Style.LineTableTotal>
              </tfoot>
            )}
          </Style.TableOrder>
          <Style.Button>Finalizar Pedido</Style.Button>
        </Style.Form>

        <GenStyle.DivSpace />
      </Style.Container>
      <Footer />
    </>
  );
}
