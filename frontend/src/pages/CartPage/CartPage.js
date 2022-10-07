import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";

export default function CartPage() {
  return (
    <>
      <Header page={"cart"} />
      <Style.Container>Hello World! 🤭 👉Carrinho</Style.Container>
      <Footer />
    </>
  );
}
