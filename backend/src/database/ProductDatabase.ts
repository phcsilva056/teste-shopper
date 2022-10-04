import { IProductDB, Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCT = "Shopper_Case_Product";

  public productDBModel = (product: Product): IProductDB => {
    const productDB: IProductDB = {
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
      qty_stock: product.getQtyStock(),
    };
    return productDB;
  };

  public createProduct = async (product: Product) => {
    const productDB = this.productDBModel(product);
    await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCT).insert(
      productDB
    );
  };
}
