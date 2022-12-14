import { ProductDatabase } from "../database/ProductDatabase";
import { IProductDB } from "../models/Product";

export class ProductBusiness {
  constructor(private productDatabase: ProductDatabase) {}

  public getAllProducts = async () => {
    const result: IProductDB[] = await this.productDatabase.getAllProducts();
    return result;
  };
}
