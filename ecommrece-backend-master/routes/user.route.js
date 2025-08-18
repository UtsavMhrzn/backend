import { Router } from "express";
import { createUserController, loginController } from "../controller/user.controller.js";

const userRouter = Router()

userRouter.post("/user/create",createUserController)

userRouter.post("/user/login",loginController)


export default userRouter