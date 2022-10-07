import { useEffect, useState } from "react";
import GetProducts from "../services/GetProducts";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState({ children }) {
  const Provider = GlobalContext.Provider;
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const result = await GetProducts();
      console.log(result);
      setData(result.success? result.data.data : undefined);
    };
    getData();
  }, []);

  const values = {data};

  return <Provider value={values}>{children}</Provider>;
}
