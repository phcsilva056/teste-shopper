import { Request, Response } from "express";
import { OrderBusiness } from "../business/OrderBusiness";
import { BaseError } from "../errors/BaseError";
import { IInputDTO } from "../models/Order";

export class OrderController {
  constructor(private orderBusiness: OrderBusiness) {}

  public createOrder = async (req: Request, res: Response) => {
    try {
      const input: IInputDTO = {
        customer_name: req.body.customer_name,
        delivery_date: req.body.delivery_date,
        products: req.body.products,
      };

      await this.orderBusiness.createOrder(input);

      res.status(201).send({ message: "Pedido criado com sucesso!" });
    } catch (error: any) {
      if (error instanceof BaseError)
        return res.status(error.statusCode).send({ message: error.message });
      res.status(500).send({ message: "Erro inesperado ao criar pedido!" });
    }
  };
}
