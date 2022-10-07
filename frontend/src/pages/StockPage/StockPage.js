import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";
import * as GenStyle from "../../global/GeneralStyled";
import TableStock from "../../components/TableStock/TableStock";
import { GlobalContext } from "../../global/GlobalContext";

export default function StockPage() {
  const {data} = useContext(GlobalContext)
  return (
    <>
      <Header page={"stock"} />
      <Style.Container>
        <GenStyle.DivSpace />
        <GenStyle.Title>Lista de Estoque</GenStyle.Title>
        <GenStyle.DivSpace />
        <Style.Table>
          <GenStyle.LineTable>
            <Style.CellTableTitle>Produto</Style.CellTableTitle>
            <Style.CellTableTitle>Preço unitário</Style.CellTableTitle>
            <Style.CellTableTitle>Quantidade disponível</Style.CellTableTitle>
          </GenStyle.LineTable>
          {data &&
            data.map((product) => {
              return <TableStock product={product} key={product.id} />;
            })}
        </Style.Table>
        <GenStyle.DivSpace />
      </Style.Container>
      <Footer />
    </>
  );
}
