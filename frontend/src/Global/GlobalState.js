import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import GetProducts from "../services/GetProducts";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState({ children }) {
  const Provider = GlobalContext.Provider;
  const [data, setData] = useState(undefined);
  const [orderList, setOrderList] = useState([]);
  const { form, onChange, clearForm } = useForm({
    customer_name: "",
    delivery_date: "",
  });
// falta salvar no localstorage
  useEffect(() => {
    const getData = async () => {
      const result = await GetProducts();
      setData(result.success ? result.data.data : undefined);
    };
    getData();
  }, [form, orderList]);

  const values = { data, orderList, setOrderList, form, onChange, clearForm };

  return <Provider value={values}>{children}</Provider>;
}
