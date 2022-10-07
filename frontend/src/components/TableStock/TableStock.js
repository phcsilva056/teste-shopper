import React from "react";
import { formatBRL } from "../../constants/FormatBRL";
import { LineTable } from "../../global/GeneralStyled";
import { CellNameProductTable, CellTable } from "./styled";

export default function TableStock({ product }) {
  const { name, price, qty_stock } = product;
  return (
    <LineTable>
      <CellNameProductTable>{name}</CellNameProductTable>
      <CellTable>{price.toLocaleString("pt-BR", formatBRL)}</CellTable>
      <CellTable soldOff={!product.qty_stock}>
        {qty_stock > 0 ? qty_stock : `(ESGOTADO)`}
      </CellTable>
    </LineTable>
  );
}
