import { ProductDatabase } from "../database/ProductDatabase";
import { IProductDB } from "../models/Product";

export class ProductBusiness {
  constructor(private productDatabase: ProductDatabase) {}

  public addProduct = async (input: IProductDB) => {
    
  };
}
