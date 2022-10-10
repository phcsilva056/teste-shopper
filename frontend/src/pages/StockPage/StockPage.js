import React, { useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Style from "./styled";
import * as GenStyle from "../../global/GeneralStyled";
import TableStock from "../../components/TableStock/TableStock";
import { GlobalContext } from "../../global/GlobalContext";
import { filterOrderBy } from "../../services/filterOrderBy";
import Loading from "../../components/Loading/Loading";

export default function StockPage() {
  const { data } = useContext(GlobalContext);
  const [products, setProducts] = useState(undefined);
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

  const showLineTableProducts = products?.map((product) => {
    return <TableStock product={product} key={product.id} />;
  });

  return (
    <>
      <Header page={"stock"} />
      {isLoading && <Loading />}
      <Style.Container>
        <GenStyle.DivSpace />
        <GenStyle.Title>Lista de Estoque</GenStyle.Title>
        <GenStyle.DivSpace />
        <GenStyle.Table>
          <thead>
            <GenStyle.LineTable>
              <GenStyle.CellTableTitle onClick={() => filterBy("name")}>
                Produto
              </GenStyle.CellTableTitle>
              <GenStyle.CellTableTitle onClick={() => filterBy("qty_stock")}>
                Quantidade
              </GenStyle.CellTableTitle>
            </GenStyle.LineTable>
          </thead>
          <tbody>{products && showLineTableProducts}</tbody>
        </GenStyle.Table>
        <GenStyle.DivSpace />
      </Style.Container>
      <Footer />
    </>
  );
}
