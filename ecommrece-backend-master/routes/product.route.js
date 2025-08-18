import { Router } from "express"
import { createProductController, getAllProductController } from "../controller/product.controller.js"

const productRouter = Router()

productRouter.get("/product/all", getAllProductController)

productRouter.post("/product/new",createProductController)


export default productRouter