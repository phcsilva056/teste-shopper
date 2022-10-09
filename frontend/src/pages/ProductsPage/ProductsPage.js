import React, { useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";
import * as GenStyle from "../../global/GeneralStyled";
import ordenacao from "../../assets/ordenacao.png";
import CardProduct from "../../components/CardProduct/CardProduct";
import { GlobalContext } from "../../global/GlobalContext";
import { filterOrderBy } from "../../services/filterOrderBy";
import { convertVowels } from "../../services/convertVowels";

export default function ProductsPage() {
  const { data, orderList, setOrderList } = useContext(GlobalContext);
  const [products, setProducts] = useState(undefined);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const filterBy = (name) => {
    const list = filterOrderBy(products, name, count);
    setProducts(list);
    setCount(count + 1);
  };

  if (data && !products) setProducts(data);

  return (
    <>
      <Header />
      <Style.Container>
        <GenStyle.DivSpace />
        <GenStyle.Title>Lista de Produtos</GenStyle.Title>
        <GenStyle.DivSpace />
        <Style.BoxFilters>
          <GenStyle.Input
            placeholder="Buscar"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Style.ButtonOrderBy onClick={() => filterBy("price")}>
            <Style.OrderBy src={ordenacao} />
          </Style.ButtonOrderBy>
        </Style.BoxFilters>
        <GenStyle.DivSpace />
        <Style.BoxCards>
          {products &&
            products
              .filter(
                (item) =>
                  convertVowels(item.name).includes(convertVowels(input)) ||
                  convertVowels(item.name) === convertVowels(input)
              )
              .map((item) => {
                return (
                  <CardProduct
                    product={item}
                    key={item.id}
                    orderList={orderList}
                    setOrderList={setOrderList}
                  />
                );
              })}
        </Style.BoxCards>
        <GenStyle.DivSpace />
      </Style.Container>
      <Footer />
    </>
  );
}
