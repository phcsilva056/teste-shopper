import { Router } from "express";
import { OrderBusiness } from "../business/OrderBusiness";
import { OrderController } from "../controller/OrderController";
import { OrderDatabase } from "../database/OrderDatabase";
import { ProductDatabase } from "../database/ProductDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { ValidateProducts } from "../services/ValidateProducts";

export const orderRouter = Router();

const orderController = new OrderController(
  new OrderBusiness(
    new OrderDatabase(),
    new IdGenerator(),
    new ValidateProducts(new ProductDatabase(), new IdGenerator())
  )
);

orderRouter.post("/order/create", orderController.createOrder);
