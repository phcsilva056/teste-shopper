export interface IOrderDB {
  id: string;
  name: string;
  delivery_date: Date;
  products: IProductsDTO;
}

export class Order {
  constructor(
    private id: string,
    private name: string,
    private delivery_date: Date,
    private products: IProductsDTO[]
  ) {}

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getDeliveryDate = () => {
    return this.delivery_date;
  };

  public getProducts = () => {
    return this.products;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setName = (newName: string) => {
    this.name = newName;
  };

  public setDeliveryDate = (newDeliveryDate: Date) => {
    this.delivery_date = newDeliveryDate;
  };

  public setProducts = (newProducts: IProductsDTO[]) => {
    this.products = newProducts;
  };
}

export interface IProductsDTO {
  products: string;
  id_product: string;
}
