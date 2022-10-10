import React from "react";
import logo from "../../assets/logo_shopper.png";
import * as Style from "./styled";

export default function Footer() {
  return (
    <Style.ContainerFooter>
      <Style.ImgLogo src={logo} />
    </Style.ContainerFooter>
  );
}
