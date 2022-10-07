import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";
import * as GenStyle from "../../global/GeneralStyled";
import TableStock from "../../components/TableStock/TableStock";
import { GlobalContext } from "../../global/GlobalContext";

export default function StockPage() {
  const { data } = useContext(GlobalContext);
  const [products, setProducts] = useState(undefined);
  const [count, setCount] = useState(0);

  const filterBy = (name) => {
    let list = [...products];
    list = list?.sort((a, b) => {
      return count % 2
        ? a[name] > b[name] ? 1 : a[name] < b[name] ? -1 : 0
        : a[name] < b[name] ? 1 : a[name] > b[name] ? -1 : 0;
    });
    setProducts(list);
    setCount(count + 1);
  };

  if (data && !products) {
    setProducts(data);
  }

  return (
    <>
      <Header page={"stock"} />
      <Style.Container>
        <GenStyle.DivSpace />
        <GenStyle.Title>Lista de Estoque</GenStyle.Title>
        <GenStyle.DivSpace />
        <Style.Table>
          <GenStyle.LineTable>
            <Style.CellTableTitle onClick={() => filterBy("name")}>
              Produto
            </Style.CellTableTitle>
            <Style.CellTableTitle onClick={() => filterBy("price")}>
              Preço unitário
            </Style.CellTableTitle>
            <Style.CellTableTitle onClick={() => filterBy("qty_stock")}>
              Quantidade disponível
            </Style.CellTableTitle>
          </GenStyle.LineTable>
          {products &&
            products.map((product) => {
              return <TableStock product={product} key={product.id} />;
            })}
        </Style.Table>
        <GenStyle.DivSpace />
      </Style.Container>
      <Footer />
    </>
  );
}
