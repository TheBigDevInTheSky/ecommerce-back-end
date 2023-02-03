import * as dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

export default async function connectDB(){
    return await mongoose.set({"strictQuery": false}).connect(process.env.MONGO_URI)
}