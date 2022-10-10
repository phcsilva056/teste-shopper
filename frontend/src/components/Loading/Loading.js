import React from "react";
import { Container, LoadingImg, TextLoading } from "./styled";
import loadingGif from "../../assets/loading.png";

const Loading = () => {
  return (
    <Container>
      <LoadingImg src={loadingGif} alt="Spinner de carregamento!" />
      <TextLoading>CARREGANDO...</TextLoading>
    </Container>
  );
};

export default Loading;
