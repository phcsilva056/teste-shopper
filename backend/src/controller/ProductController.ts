import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { IInputDTO } from "../models/Product";
import { IdGenerator } from "../services/IdGenerator";

export class ProductController {
  constructor(
    private productBusiness: ProductBusiness,
    private idGenerator: IdGenerator
  ) {}

  public addProduct = async (req: Request, res: Response) => {
    try {
      const input: IInputDTO = {
        name: req.body.name,
        price: req.body.price,
        qty_stock: req.body.qty_stock,
      };

      await this.productBusiness.addProduct(input);

      res.status(201).send({ message: "Produto criado com sucesso!" });
    } catch (error: any) {
      if (error instanceof BaseError)
        return res.status(error.statusCode).send({ message: error.message });
      res.status(500).send({ message: "Erro inesperado ao criar produto!" });
    }
  };

  public getAllProduct = async (req: Request, res: Response) => {
    try {
      const result = await this.productBusiness.getAllProducts();

      res
        .status(201)
        .send({ message: "Produtos coletados com Sucesso!", data: result });
    } catch (error: any) {
      if (error instanceof BaseError)
        return res.status(error.statusCode).send({ message: error.message });
      res.status(500).send({ message: "Erro inesperado ao coletar os produtos!" });
    }
  };
}
