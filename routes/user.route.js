import { Router } from "express";
import { createUserController, deleteUser, getAllUsers, loginController } from "../controller/user.controller.js";

const userRouter = Router()

userRouter.post("/user/create",createUserController)

userRouter.post("/user/login",loginController)

userRouter.get("/user/all",getAllUsers)

userRouter.delete("/user/delete/:id",deleteUser)


export default userRouter