import { OrderDatabase } from "../database/OrderDatabase";
import { IInputDTO, Order } from "../models/Order";
import { IdGenerator } from "../services/IdGenerator";
import { ParamsError } from "../errors/ParamsError";
import { ValidateProducts } from "../services/ValidateProducts";
import { NotFoundError } from "../errors/NotFoundError";

export class OrderBusiness {
  constructor(
    private orderDatabase: OrderDatabase,
    private idGenerator: IdGenerator,
    private validateProducts: ValidateProducts
  ) {}

  public createOrder = async (input: IInputDTO) => {
    const { name, delivery_date, products } = input;

    if (typeof name !== "string")
      throw new ParamsError(
        "Parâmetro 'name' está inválido e não é do tipo string!"
      );

    if (!Date.parse(delivery_date))
      throw new ParamsError(
        "Parâmetro 'delivery_date' não tem uma data válida!"
      );

    if (!products.length)
      throw new ParamsError(
        "Parâmetro 'products' não está vazio ou não tem valor válido!"
      );

    const checkProducts = await this.validateProducts.checkProducts(products);
    if (!checkProducts) throw new NotFoundError();

    const checkStockProducts = this.validateProducts.checkStockProducts(
      products,
      checkProducts
    );

    if (!checkStockProducts)
      throw new ParamsError("Algum produto não tem estoque suficiente!");

    const id = this.idGenerator.generate();
    const productsOrderWithID = this.validateProducts.structuredProducts(
      products,
      id
    );

    const newOrder = new Order(
      id,
      name,
      new Date(delivery_date),
      productsOrderWithID
    );

    await this.orderDatabase.createOrder(newOrder);
  };
}
