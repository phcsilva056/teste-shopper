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
          {(!page || page === "order") && (
            <>
              <Style.ButtonNormal onClick={() => goToPage(navigate, "/stock")}>
                Estoque
              </Style.ButtonNormal>
              <Style.Divisor />
            </>
          )}
          {page && (
            <>
              <Style.ButtonNormal onClick={() => goToPage(navigate, "/products")}>
                Produtos
              </Style.ButtonNormal>
              <Style.Divisor />
            </>
          )}
          {page !== "error" && page !== "order" && (
            <>
              <Style.ButtonOrder onClick={() => goToPage(navigate, "/")}>
                Fazer Pedido
              </Style.ButtonOrder>
              <Style.Divisor />
            </>
          )}
        </Style.NavHeader>
      </Style.DivHeader>
    </Style.ContainerHeader>
  );
}
