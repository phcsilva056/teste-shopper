import React from "react";
import { formatBRL } from "../../constants/FormatBRL";
import * as Style from "./styled";

export default function CardProduct({ product, orderList, setOrderList }) {
  const { id, qty_stock, name, price } = product;
  const exist = orderList.findIndex((item) => item.id_product === id);

  const onClickAdd = () => {
    const list = [...orderList];

    if (exist >= 0) list[exist].amount++;
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
  const amountInList = exist >= 0 ? orderList[exist].amount : 0;
  return (
    <Style.ContainerCard>
      <Style.DivAmountProduct>
        {exist >= 0 && (
          <Style.AmountProduct>{`Adicionado na Lista(x${orderList[exist].amount})`}</Style.AmountProduct>
        )}
      </Style.DivAmountProduct>
      <Style.Name>{name}</Style.Name>
      <Style.DivPriceButton>
        <Style.DivButtons>
          {exist >= 0 && (
            <Style.ButtonRemove onClick={onClickRemove}>-1</Style.ButtonRemove>
          )}
          {qty_stock > amountInList ? (
            <Style.ButtonAdd onClick={onClickAdd}>Adicionar</Style.ButtonAdd>
          ) : (
            <Style.ButtonSoldOff>Unidades Esgotadas</Style.ButtonSoldOff>
          )}
        </Style.DivButtons>
        <Style.Price>{price.toLocaleString("pt-BR", formatBRL)}</Style.Price>
      </Style.DivPriceButton>
    </Style.ContainerCard>
  );
}
