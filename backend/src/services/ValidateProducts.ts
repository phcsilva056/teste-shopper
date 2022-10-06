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
    let checkDuplicate = [...products];
    for (let i = 0; i < products.length; i++) {
      let count = 0;
      for (let i2 = 0; i2 < checkDuplicate.length; i2++) {
        if (checkDuplicate[i2].id_product === products[i].id_product) count++;
        if (count > 1) return undefined;
      }
    }

    const result: IProductsStockDTO[] = [];
    for (const product of products) {
      const check: number | undefined = Number(
        await this.productDatabase.findProductById(product.id_product)
      );

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
      if (products[i].amount > stocks[i].qty_stock || products[i].amount < 1)
        return false;

    return true;
  };

  public checkValuesProducts = (products: IProductsDTO[]): boolean => {
    for (const product of products) {
      const { amount, id_product } = product;
      if (!amount || !id_product) return false;
    }
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
        amount: product.amount,
        id_order,
        id_product: product.id_product,
      });
    }
    return structured;
  };
}
