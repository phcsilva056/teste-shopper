import React from "react";
import { Container, LoadingImg } from "./styled";
import loadingGif from "../../assets/loading.png";

const Loading = () => {
  return (
    <Container>
      <LoadingImg src={loadingGif} alt="Spinner de carregamento!" />;
    </Container>
  );
};

export default Loading;
