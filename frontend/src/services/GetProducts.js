import axios from "axios";
import { Base_URL } from "../constants/baseURL";

const GetProducts = async () => {
  try {
    const { data } = await axios.get(`${Base_URL}/product`);
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error,
      message: "Erro desconhecido, não foi póssivel encontrar os produtos!",
    };
  }
};

export default GetProducts;
