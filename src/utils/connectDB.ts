import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

export default async function connectDB() {
	try {
		return await mongoose
			.set({ strictQuery: false })
			.connect(process.env.MONGO_URI)
	} catch (e) {
		console.log(e.message)
	}
}
