import React from "react";
import { formatBRL } from "../../constants/FormatBRL";
import * as Style from "./styled";

export default function CardProduct({ values }) {
  const [product, orderList, setOrderList] = values;
  const { id, qty_stock, name, price } = product;
  const exist = orderList.findIndex((item) => item.id_product === id);

  const onClickAdd = (amount) => {
    const list = [...orderList];

    if (exist >= 0) list[exist].amount += amount;
    else list.push({ id_product: id, amount });

    setOrderList(list);
  };

  const onClickRemove = (amount) => {
    const list = orderList
      .map((item) => {
        return item.id_product === id
          ? { ...item, amount: item.amount - amount }
          : item;
      })
      .filter((item) => item.amount > 0);
    setOrderList(list);
  };

  const amountInList = exist >= 0 ? orderList[exist].amount : 0;
  const inStock = qty_stock - amountInList;

  return (
    <Style.ContainerCard>
      <Style.DivAmountProduct>
        {exist >= 0 && (
          <Style.AmountProduct>{`Adicionado na Lista(x${amountInList})`}</Style.AmountProduct>
        )}
      </Style.DivAmountProduct>
      <Style.Name>{name}</Style.Name>
      <Style.DivPriceButton>
        <Style.DivButtons>
          {exist >= 0 && (
            <>
              {amountInList > 1 && (
                <Style.ButtonRemove onClick={() => onClickRemove(10)}>
                  {amountInList > 9 ? `-10` : `-${amountInList}`}
                </Style.ButtonRemove>
              )}
              <Style.ButtonRemove onClick={() => onClickRemove(1)}>
                -1
              </Style.ButtonRemove>
            </>
          )}
          {qty_stock > amountInList ? (
            <>
              <Style.ButtonAdd onClick={() => onClickAdd(1)}>
                {exist >= 0 ? "+1" : "Adicionar"}
              </Style.ButtonAdd>
              {exist >= 0 && qty_stock > amountInList + 1 && (
                <Style.ButtonAdd
                  onClick={() => onClickAdd(inStock > 10 ? 10 : inStock)}
                >
                  {inStock > 10 ? `+10` : `+${inStock}`}
                </Style.ButtonAdd>
              )}
            </>
          ) : (
            <Style.ButtonSoldOff>Unidades Esgotadas</Style.ButtonSoldOff>
          )}
        </Style.DivButtons>
        <Style.Price>{price.toLocaleString("pt-BR", formatBRL)}</Style.Price>
      </Style.DivPriceButton>
    </Style.ContainerCard>
  );
}
