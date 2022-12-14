export interface IOrderDB {
  id: string;
  customer_name: string;
  delivery_date: Date;
  products: IProductsDTO[];
}

export interface IOrderAddDB {
  addOrder: IOrderDTO;
  addProductsOrder: IOrderProductsDTO[];
}

export class Order {
  constructor(
    private id: string,
    private customer_name: string,
    private delivery_date: Date,
    private products: IOrderProductsDTO[]
  ) {}

  public getId = () => {
    return this.id;
  };

  public getCustomerName = () => {
    return this.customer_name;
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

  public setName = (newCustomerName: string) => {
    this.customer_name = newCustomerName;
  };

  public setDeliveryDate = (newDeliveryDate: Date) => {
    this.delivery_date = newDeliveryDate;
  };

  public setProducts = (newProducts: IOrderProductsDTO[]) => {
    this.products = newProducts;
  };
}

export interface IInputDTO {
  customer_name: string;
  delivery_date: string;
  products: IProductsDTO[];
}

export interface IProductsDTO {
  amount: number;
  id_product: string;
}

export interface IProductsStockDTO {
  qty_stock: number;
  id_product: string;
}

export interface IOrderDTO {
  id: string;
  customer_name: string;
  delivery_date: Date;
}

export interface IOrderProductsDTO {
  id: string;
  amount: number;
  id_order: string;
  id_product: string;
}
