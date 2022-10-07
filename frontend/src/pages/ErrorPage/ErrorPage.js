import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled"

export default function ErrorPage() {
  return (
    <>
      <Header page={"error"}/>
      <Style.Container>Error Page! 😬</Style.Container>
      <Footer/>
    </>
  );
}
