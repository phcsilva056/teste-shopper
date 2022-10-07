import React from "react";
import logo from "../../assets/logo_shopper.png";
import * as Style from "./styled";

export default function Header() {
  return (
    <Style.ContainerHeader>
      <Style.LineHeader />
      <Style.DivHeader>
        <Style.Divisor />
        <Style.ImgLogo src={logo} />
        <Style.Divisor />
        <Style.NavHeader>
          <Style.ButtonNormal>Estoque</Style.ButtonNormal>
          <Style.Divisor />
          <Style.ButtonCart>Carrinho</Style.ButtonCart>
          <Style.Divisor />
        </Style.NavHeader>
      </Style.DivHeader>
    </Style.ContainerHeader>
  );
}
