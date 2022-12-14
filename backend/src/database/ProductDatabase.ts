import { IProductDB, Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCT = "Shopper_Case_Product";

  private productDBModel = (product: Product): IProductDB => {
    const productDB: IProductDB = {
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
      qty_stock: product.getQtyStock(),
    };
    return productDB;
  };

  public getAllProducts = async (): Promise<IProductDB[]> => {
    const allProducts = await BaseDatabase.connection(
      ProductDatabase.TABLE_PRODUCT
    ).select("*");
    return allProducts;
  };

  public createProduct = async (product: Product): Promise<void> => {
    const productDB = this.productDBModel(product);
    await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCT).insert(
      productDB
    );
  };

  public findProductById = async (id: string): Promise<number | undefined> => {
    const result = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCT)
      .select("qty_stock")
      .where({ id });

    if (!result.length) return undefined;

    return Number(result[0].qty_stock);
  };
}
