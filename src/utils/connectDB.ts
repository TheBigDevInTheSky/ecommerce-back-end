import mongoose from 'mongoose'

const OPTIONS = {
	maxPoolSize: 10, // Maintain up to 10 socket connections
	serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
	socketTimeoutMS: 15000, // Close sockets after 15 seconds of inactivity, raise this if we end up with long running opperations.
}

export default async function connectDB() {
	try {
		await mongoose
			.set({ strictQuery: false })
			.connect(process.env.MONGO_URI, OPTIONS)
	} catch (e) {
		console.error(e.message)
		throw Error(e.message)
	}
}
