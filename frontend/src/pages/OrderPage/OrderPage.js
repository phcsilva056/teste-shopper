import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";
import * as GenStyle from "../../global/GeneralStyled";
import { data } from "../../constants/dataMock";
import CardProduct from "../../components/CardProduct/CardProduct";

export default function OrderPage() {
  return (
    <>
      <Header />
      <Style.Container>
        <GenStyle.DivSpace />
        <GenStyle.Title>Lista de Produtos</GenStyle.Title>
        <GenStyle.DivSpace />
        <Style.BoxCards>
          {data &&
            data.map((item) => {
              return <CardProduct product={item} key={item.id} />;
            })}
        </Style.BoxCards>
        <GenStyle.DivSpace />
      </Style.Container>
      <Footer />
    </>
  );
}
