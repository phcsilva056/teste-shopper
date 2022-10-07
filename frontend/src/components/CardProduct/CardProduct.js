import React from "react";
import { formatBRL } from "../../constants/FormatBRL";
import * as Style from "./styled";

export default function CardProduct({ product }) {
  return (
    <Style.ContainerCard>
      <Style.Name>{product.name}</Style.Name>
      <Style.DivPriceButton>
        <Style.ButtonAdd>Adicionar</Style.ButtonAdd>
        <Style.Price>
          {product.price.toLocaleString("pt-BR", formatBRL)}
        </Style.Price>
      </Style.DivPriceButton>
    </Style.ContainerCard>
  );
}
