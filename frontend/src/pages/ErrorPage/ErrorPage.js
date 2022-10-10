import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container, NotFoundImg } from "./styled";
import notFound from "../../assets/notFound.jpg";

export default function ErrorPage() {
  return (
    <>
      <Header page={"error"} />
      <Container>
        <NotFoundImg
          src={notFound}
          alt="Imagem de erro, página não encotrada!"
        />
      </Container>
      <Footer />
    </>
  );
}
