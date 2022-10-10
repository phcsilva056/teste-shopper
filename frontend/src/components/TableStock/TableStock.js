import React from "react";
import { LineTable } from "../../global/GeneralStyled";
import { CellNameProductTable, CellTable } from "./styled";

export default function TableStock({ product }) {
  const { name, qty_stock } = product;
  return (
    <LineTable>
      <CellNameProductTable>{name}</CellNameProductTable>
      <CellTable soldOff={!product.qty_stock}>
        {qty_stock > 0 ? qty_stock : `(ESGOTADO)`}
      </CellTable>
    </LineTable>
  );
}
