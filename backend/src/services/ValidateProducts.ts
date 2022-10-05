import { ProductDatabase } from "../database/ProductDatabase";
import {
  IOrderProductsDTO,
  IProductsDTO,
  IProductsStockDTO,
} from "../models/Order";
import { IdGenerator } from "./IdGenerator";

export class ValidateProducts {
  constructor(
    private productDatabase: ProductDatabase,
    private idGenerator: IdGenerator
  ) {}

  public checkProducts = async (
    products: IProductsDTO[]
  ): Promise<IProductsStockDTO[] | undefined> => {
    const result: IProductsStockDTO[] = [];
    for (const product of products) {
      const check: number | undefined =
        await this.productDatabase.findProductById(product.id_product);

      if (!check) return undefined;

      result.push({ id_product: product.id_product, qty_stock: check });
    }
    return result;
  };

  public checkStockProducts = (
    products: IProductsDTO[],
    stocks: IProductsStockDTO[]
  ): boolean => {
    for (let i = 0; i < products.length; i++)
      if (products[i].amount > stocks[i].qty_stock) return false;
      
    return true;
  };

  public structuredProducts = (
    products: IProductsDTO[],
    id_order: string
  ): IOrderProductsDTO[] => {
    const structured: IOrderProductsDTO[] = [];
    for (const product of products) {
      const id = this.idGenerator.generate();
      structured.push({
        id,
        id_order,
        id_product: product.id_product,
        amount: product.amount,
      });
    }
    return structured;
  };
}
