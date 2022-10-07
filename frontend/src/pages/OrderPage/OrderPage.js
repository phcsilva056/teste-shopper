import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";
import { data } from "../../constants/dataMock";
import CardProduct from "../../components/CardProduct/CardProduct";

export default function OrderPage() {
  return (
    <>
      <Header />
      <Style.Container>
        <Style.DivSpace />
        <Style.Title>Lista de Produtos</Style.Title>
        <Style.DivSpace />
        <Style.BoxCards>
          {data &&
            data.map((item) => {
              return <CardProduct product={item} key={item.id} />;
            })}
        </Style.BoxCards>
      <Style.DivSpace />
      </Style.Container>
      <Footer />
    </>
  );
}
