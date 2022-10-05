import {
  IOrderAddDB,
  IOrderDTO,
  IOrderProductsDTO,
  Order,
} from "../models/Order";
import { IProductDB, Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";
import { ProductDatabase } from "./ProductDatabase";

export class OrderDatabase extends BaseDatabase {
  public static TABLE_ORDER = "Shopper_Case_Order";
  public static TABLE_PRODUCT_ORDER = "Shopper_Case_Product_Order";

  private toOrderModel = (order: Order): IOrderAddDB => {
    const addOrder: IOrderDTO = {
      id: order.getId(),
      customer_name: order.getCustomerName(),
      delivery_date: order.getDeliveryDate(),
    };
    const addProductsOrder: IOrderProductsDTO[] = order.getProducts();
    return { addOrder, addProductsOrder };
  };

  private createProductsOrder = async (
    productsOrder: IOrderProductsDTO[]
  ): Promise<void> => {
    await BaseDatabase.connection(OrderDatabase.TABLE_PRODUCT_ORDER).insert(
      productsOrder
    );
  };

  private updateProductStock = async (
    productsOrder: IOrderProductsDTO[]
  ): Promise<void> => {
    for (const product of productsOrder) {
      console.log(product);

      await BaseDatabase.connection.raw(
        `update ${ProductDatabase.TABLE_PRODUCT} set qty_stock = qty_stock - ${product.amount} where id=${product.id_product};`
      );
    }
  };

  public createOrder = async (order: Order): Promise<void> => {
    const addOrderStrutured = this.toOrderModel(order);

    await BaseDatabase.connection(OrderDatabase.TABLE_ORDER).insert(
      addOrderStrutured.addOrder
    );

    await this.createProductsOrder(addOrderStrutured.addProductsOrder);
    console.log("teste");

    await this.updateProductStock(addOrderStrutured.addProductsOrder);
  };
}
