import React from "react";
import logo from "../../assets/logo_shopper.png";
import * as Style from "./styled";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function Header({ page = undefined }) {
  const navigate = useNavigate();
  return (
    <Style.ContainerHeader>
      <Style.LineHeader />
      <Style.DivHeader>
        <Style.Divisor />
        <Style.ImgLogo src={logo} />
        <Style.Divisor />
        <Style.NavHeader>
          {(!page || page === "cart") && (
            <>
              <Style.ButtonNormal onClick={() => goToPage(navigate, "/stock")}>
                Estoque
              </Style.ButtonNormal>
              <Style.Divisor />
            </>
          )}
          {page && (
            <>
              <Style.ButtonNormal onClick={() => goToPage(navigate, "/")}>
                Produtos
              </Style.ButtonNormal>
              <Style.Divisor />
            </>
          )}
          {page !== "error" && page !== "cart" && (
            <>
              <Style.ButtonCart onClick={() => goToPage(navigate, "/cart")}>
                Carrinho
              </Style.ButtonCart>
              <Style.Divisor />
            </>
          )}
        </Style.NavHeader>
      </Style.DivHeader>
    </Style.ContainerHeader>
  );
}
