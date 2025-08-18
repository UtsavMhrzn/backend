import mongoose from "mongoose";

export const dbConnect = () => {

    mongoose.connect("mongodb://localhost:27017/ecommerce", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.error("MongoDB connection error:", err));

}