import {
  IOrderAddDB,
  IOrderDTO,
  IOrderProductsDTO,
  Order,
} from "../models/Order";
import { IProductDB, Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase {
  public static TABLE_ORDER = "Shopper_Case_Order";
  public static TABLE_PRODUCT_ORDER = "Shopper_Case_Product_Order";

  private toOrderModel = (order: Order): IOrderAddDB => {
    const addOrder: IOrderDTO = {
      id: order.getId(),
      name: order.getName(),
      delivery_date: order.getDeliveryDate(),
    };
    const addProductsOrder: IOrderProductsDTO[] = order.getProducts();
    return { addOrder, addProductsOrder };
  };

  public createOrder = async (order: Order): Promise<void> => {
    const addOrderStrutured = this.toOrderModel(order);
    await BaseDatabase.connection(OrderDatabase.TABLE_ORDER).insert(
      addOrderStrutured.addOrder
    );
    await BaseDatabase.connection(OrderDatabase.TABLE_PRODUCT_ORDER).insert(
      addOrderStrutured.addProductsOrder
    );
  };
}
