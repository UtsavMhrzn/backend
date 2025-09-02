import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
//     phoneNumber: { type: String, required: false }
 })


const User = new mongoose.model("Users", userSchema)
export default User