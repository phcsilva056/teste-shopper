import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}

  public getAllProduct = async (req: Request, res: Response) => {
    try {
      const result = await this.productBusiness.getAllProducts();

      res
        .status(201)
        .send({ message: "Produtos coletados com Sucesso!", data: result });
    } catch (error: any) {
      if (error instanceof BaseError)
        return res.status(error.statusCode).send({ message: error.message });
      res
        .status(500)
        .send({ message: "Erro inesperado ao coletar os produtos!" });
    }
  };
}
