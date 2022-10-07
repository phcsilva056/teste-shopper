import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";

export default function StockPage() {
  return (
    <>
      <Header page={"stock"} />
      <Style.Container>Hello World! 🤭 👉Estoque</Style.Container>
      <Footer />
    </>
  );
}
