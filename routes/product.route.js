<<<<<<< HEAD
import { Router } from "express"
import { createProductController, getAllProductController } from "../controller/product.controller.js"

const productRouter = Router()

productRouter.get("/product/all", getAllProductController)

productRouter.post("/product/new",createProductController)


export default productRouter
=======
import { Router } from "express";



export const productRouter = Router()
import { getAllProductController } from "../controller/product.controller.js";
productRouter.get("/product/all", getAllProductController)
>>>>>>> 040241917bbb65c8370cfe62ce52d29d7dcfb148
