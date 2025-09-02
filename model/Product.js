import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    discount: { type: String, required: false },
    rating: { type: String, required: true },
    disprc: { type: String, required: false },
    image: { type: String, required: true }
 })


const Product = new mongoose.model("Products", productSchema)
export default Product