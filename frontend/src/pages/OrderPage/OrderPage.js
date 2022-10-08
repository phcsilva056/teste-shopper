import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";
import * as GenStyle from "../../global/GeneralStyled";

export default function OrderPage() {
  return (
    <>
      <Header page={"order"} />
      <Style.Container>
        <GenStyle.DivSpace />
        <GenStyle.Title>Formulário de Pedidos</GenStyle.Title>
        <GenStyle.DivSpace />
        <GenStyle.Table>
          <thead>
            <GenStyle.LineTable>
              <Style.CellTitle>Produto</Style.CellTitle>
              <Style.CellTitle>Preço</Style.CellTitle>
              <Style.CellTitle>Quantidade</Style.CellTitle>
            </GenStyle.LineTable>
          </thead>
          <tbody>
            {/* {products &&
            products.map((product) => {
              return <TableStock product={product} key={product.id} />;
            })} */}
          </tbody>
        </GenStyle.Table>
        <GenStyle.DivSpace />
      </Style.Container>
      <Footer />
    </>
  );
}
