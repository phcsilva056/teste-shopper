import { IProductDB, Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase {
  public static TABLE_ORDER = "Shopper_Case_Order";
  public static TABLE_PRODUCT_ORDER = "Shopper_Case_Product_Order";

}
