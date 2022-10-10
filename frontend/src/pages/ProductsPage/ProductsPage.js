import React, { useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";
import * as GenStyle from "../../global/GeneralStyled";
import ordenacao from "../../assets/ordenacao.png";
import CardProduct from "../../components/CardProduct/CardProduct";
import { GlobalContext } from "../../global/GlobalContext";
import { filterOrderBy } from "../../services/filterOrderBy";
import { convertVowels } from "../../services/convertVowels";
import Loading from "../../components/Loading/Loading";

export default function ProductsPage() {
  const { data, orderList, setOrderList } = useContext(GlobalContext);
  const [products, setProducts] = useState(undefined);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const filterBy = (name) => {
    const list = filterOrderBy(products, name, count);
    setProducts(list);
    setCount(count + 1);
  };

  if (data && !products) {
    setProducts(data);
    setIsLoading(false);
  }

  const showCardsProducts = products
    ?.filter(
      (item) =>
        convertVowels(item.name).includes(convertVowels(input)) ||
        convertVowels(item.name) === convertVowels(input)
    )
    .map((item) => {
      return (
        <CardProduct values={[item, orderList, setOrderList]} key={item.id} />
      );
    });

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <Style.Container>
        <GenStyle.DivSpace />
        <GenStyle.Title>Lista de Produtos</GenStyle.Title>
        <GenStyle.DivSpace />
        <Style.BoxFilters>
          <GenStyle.Input
            placeholder="Buscar"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Style.ButtonOrderBy onClick={() => filterBy("price")}>
            <Style.OrderBy src={ordenacao} />
          </Style.ButtonOrderBy>
        </Style.BoxFilters>
        <GenStyle.DivSpace />
        <Style.BoxCards>{showCardsProducts}</Style.BoxCards>
        <GenStyle.DivSpace />
      </Style.Container>
      <Footer />
    </>
  );
}
