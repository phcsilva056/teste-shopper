import { Router } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDatabase } from "../database/ProductDatabase";

export const productRouter = Router();

const productController = new ProductController(
  new ProductBusiness(new ProductDatabase())
);

productRouter.get("/", productController.getAllProduct);
