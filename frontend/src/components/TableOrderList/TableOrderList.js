import React from "react";
import { formatBRL } from "../../constants/FormatBRL";
import { LineTable } from "../../global/GeneralStyled";
import * as Style from "./styled";

export default function TableOrderList({ product, orderList, setOrderList }) {
  const { id, name, price, amount, qty_stock } = product;
  const find = orderList.findIndex((item) => item.id_product === id);

  const onClickAdd = () => {
    const list = [...orderList];

    if (find >= 0) list[find].amount++;
    else list.push({ id_product: id, amount: 1 });

    setOrderList(list);
  };

  const onClickRemove = () => {
    const list = orderList
      .map((item) => {
        return item.id_product === id
          ? { ...item, amount: item.amount - 1 }
          : item;
      })
      .filter((item) => item.amount);
    setOrderList(list);
  };

  return (
    <LineTable>
      <Style.CellTable>{name}</Style.CellTable>
      <Style.CellTable>
        {price.toLocaleString("pt-BR", formatBRL)}
      </Style.CellTable>
      <Style.CellTable>
        <Style.DivQuantity>
          <Style.ButtonRemove type="button" onClick={onClickRemove}>
            {"-"}
          </Style.ButtonRemove>
          <Style.Amount>{amount}</Style.Amount>
          {qty_stock > amount ? (
            <Style.Button type="button" onClick={onClickAdd}>
              {"+"}
            </Style.Button>
          ) : (
            <Style.ButtonMax type="button">{"+"}</Style.ButtonMax>
          )}
        </Style.DivQuantity>
      </Style.CellTable>
    </LineTable>
  );
}
