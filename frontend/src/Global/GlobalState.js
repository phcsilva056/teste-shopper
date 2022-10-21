import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import GetProducts from "../services/GetProducts";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState({ children }) {
  const Provider = GlobalContext.Provider;
  const [data, setData] = useState(undefined);
  const [orderList, setOrderList] = useState(undefined);
  const { form, setForm, onChange, clearForm } = useForm({
    customer_name: "",
    delivery_date: "",
  });

  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem("order_list"));

    if (storageList && !orderList) {
      const form_costumer = JSON.parse(localStorage.getItem("form_costumer"));
      setOrderList(storageList);
      !!form_costumer && setForm(form_costumer);
    } else {
      setOrderList([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!orderList || !orderList?.length) {
      const getData = async () => {
        const result = await GetProducts();
        setData(result.success ? result.data.data : undefined);
        !result.success &&
          alert(
            `${result.message}\n${result.error.code} : ${result.error.message}`
          );
      };
      getData();
    }

    if (orderList) {
      localStorage.setItem("order_list", JSON.stringify(orderList));
      localStorage.setItem("form_costumer", JSON.stringify(form));
    }
  }, [setForm, form, orderList]);

  const values = { data, orderList, setOrderList, form, onChange, clearForm };

  return <Provider value={values}>{children}</Provider>;
}
