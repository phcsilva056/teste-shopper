import axios from "axios";
import { Base_URL } from "../constants/baseURL";

const GetProducts = async () => {
  try {
    const products = await axios.get(`${Base_URL}/products`);
    return { success: true, products };
  } catch (error) {
    return {
      success: false,
      error,
      message: "Erro desconhecido, não foi póssivel encontrar os produtos!",
    };
  }
};

export default GetProducts;
