import bodyParser from "body-parser"
import express from "express"
import { dbConnect } from "./config/db.config.js"
import productRouter from "./routes/product.route.js"
import userRouter from "./routes/user.route.js"

const app = express()
const port = 8080

app.use(bodyParser.json())

dbConnect()


app.use("/api", productRouter,userRouter)


app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})