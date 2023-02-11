import { model, Schema } from 'mongoose'

const Product = new Schema({
	name: { type: String, required: true },
	category: { type: String, required: true },
	amount: { type: Number, default: 0 },
	price: { type: Number, required: true },
	rating: Number,
	ratingsCount: Number,
	thumbnails: [String],
	images: [String],
	description: { type: String, required: true },
})

export default model('Product', Product)
