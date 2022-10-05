import { ProductDatabase } from "../database/ProductDatabase";
import { ParamsError } from "../errors/ParamsError";
import { IInputDTO, IProductDB } from "../models/Product";

export class ProductBusiness {
  constructor(private productDatabase: ProductDatabase) {}

  public addProduct = async (input: IInputDTO) => {
    const { name, price, qty_stock } = input;

    if (typeof name !== "string" || !name)
      throw new ParamsError(
        "Parâmetro 'name' está inválido,seu valor não é do tipo string ou está vazia!"
      );

    if (typeof price !== "number" || !price || price <= 0)
      throw new ParamsError(
        "Parâmetro 'price' está inválido,seu valor não é do tipo number, está vazia ou é negativo!"
      );

    if (typeof qty_stock !== "number" || !qty_stock || qty_stock <= 0)
      throw new ParamsError(
        "Parâmetro 'qty_stock' está inválido,seu valor não é do tipo number, está vazia ou é negativo!"
      );

      
  };

  public getAllProducts = async () => {
    const result: IProductDB[] = await this.productDatabase.getAllProducts();
    return result;
  };
}
