import { Router } from "express";



export const productRouter = Router()
import { getAllProductController } from "../controller/product.controller.js";
productRouter.get("/product/all", getAllProductController)