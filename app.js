<<<<<<< HEAD
import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import { dbConnect } from "./config/db.config.js"
import productRouter from "./routes/product.route.js"
import userRouter from "./routes/user.route.js"
const app = express()
const port = 8080

app.use(bodyParser.json())

app.use(cors({
    origin: "http://localhost:5174"
}))

dbConnect()


app.use("/api", productRouter, userRouter)


app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
=======
const express = require("express")
const { productRouter } = require("./routes/product.route")
const app = express()
const port = 8080

app.use("/api", productRouter)
 
app.listen(port, () => {
  console.log("Server is running")
})
 
>>>>>>> 040241917bbb65c8370cfe62ce52d29d7dcfb148
