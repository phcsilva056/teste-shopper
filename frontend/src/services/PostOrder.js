import axios from "axios";
import { Base_URL } from "../constants/baseURL";

const PostOrder = async (body) => {
  try {
    await axios.post(`${Base_URL}/order/create`, body);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error,
      message: "Erro desconhecido, não foi póssivel realizar o pedido!",
    };
  }
};

export default PostOrder;
