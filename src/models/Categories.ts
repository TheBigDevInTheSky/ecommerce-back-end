import { model, Schema } from 'mongoose'

const Categories = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
})

export default model('Categories', Categories)
