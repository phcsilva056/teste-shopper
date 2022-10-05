export interface IProductDB {
  id: string;
  name: string;
  price: number;
  qty_stock: number;
}

export class Product {
  constructor(
    private id: string,
    private name: string,
    private price: number,
    private qty_stock: number
  ) {}

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getPrice = () => {
    return this.price;
  };

  public getQtyStock = () => {
    return this.qty_stock;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setName = (newName: string) => {
    this.name = newName;
  };

  public setPrice = (newPrice: number) => {
    this.price = newPrice;
  };

  public setQtyStock = (newQtyStock: number) => {
    this.qty_stock = newQtyStock;
  };
}

export interface IInputDTO {
  name: string;
  price: number;
  qty_stock: number;
}
