import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";
import * as GenStyle from "../../global/GeneralStyled";

export default function CartPage() {
  return (
    <>
      <Header page={"cart"} />
      <Style.Container>
        <GenStyle.DivSpace />
        <GenStyle.Title>Carrinho</GenStyle.Title>
        <GenStyle.DivSpace />
        <GenStyle.Table>
          <GenStyle.LineTable>
            <Style.CellTitle>Produto</Style.CellTitle>
            <Style.CellTitle>Preço</Style.CellTitle>
            <Style.CellTitle>Quantidade</Style.CellTitle>
          </GenStyle.LineTable>
          {/* {products &&
            products.map((product) => {
              return <TableStock product={product} key={product.id} />;
            })} */}
        </GenStyle.Table>
        <GenStyle.DivSpace />
      </Style.Container>
      <Footer />
    </>
  );
}
