import React from "react";
import { formatBRL } from "../../constants/FormatBRL";
import * as Style from "./styled";

export default function CardProduct({ product, orderList, setOrderList }) {
  const { qty_stock, name, price } = product;
  return (
    <Style.ContainerCard>
      <Style.Name>{name}</Style.Name>
      <Style.DivPriceButton>
        {qty_stock > 0 ? (
          <Style.ButtonAdd>Adicionar</Style.ButtonAdd>
        ) : (
          <Style.ButtonSoldOff>Unidades Esgotadas</Style.ButtonSoldOff>
        )}
        <Style.Price>{price.toLocaleString("pt-BR", formatBRL)}</Style.Price>
      </Style.DivPriceButton>
    </Style.ContainerCard>
  );
}
