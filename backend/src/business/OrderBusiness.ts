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

  public createOrder = async (input: IInputDTO): Promise<void> => {
    const { customer_name, delivery_date, products } = input;

    if (typeof customer_name !== "string" || !customer_name)
      throw new ParamsError(
        "Parâmetro 'customer_name' está inválido,seu valor não é do tipo string ou está vazia!"
      );

    if (!delivery_date) {
      throw new ParamsError(
        "Parâmetro 'delivery_date' é inválido, valor não foi informado!"
      );
    }

    let date = delivery_date.replaceAll("/", "-");
    if (!Date.parse(date)) date = date.split("-").reverse().join("-");

    if (!Date.parse(date))
      throw new ParamsError(
        "Parâmetro 'delivery_date' não tem uma data válida!"
      );

    if (!products || !products.length)
      throw new ParamsError(
        "Parâmetro 'products' não está vazio ou não tem valor válido!"
      );

    const checkProductsValues =
      this.validateProducts.checkValuesProducts(products);

    if (!checkProductsValues)
      throw new ParamsError(
        "Parâmetro 'products' possui parâmetros inválido, deve conter 'amount'(number, e maior que 0) e 'id_product'(string)!"
      );

    const checkProducts = await this.validateProducts.checkProducts(products);
    if (!checkProducts)
      throw new NotFoundError("Algum produto não existe ou está duplicado!");

    const checkStockProducts = this.validateProducts.checkStockProducts(
      products,
      checkProducts
    );

    if (!checkStockProducts)
      throw new ParamsError(
        "Algum produto não tem estoque suficiente ou valor inválido!"
      );

    const id = this.idGenerator.generate();
    const productsOrderWithID = this.validateProducts.structuredProducts(
      products,
      id
    );

    const newOrder = new Order(
      id,
      customer_name,
      new Date(date),
      productsOrderWithID
    );

    await this.orderDatabase.createOrder(newOrder);
  };
}
