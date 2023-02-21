import { Request, Response } from 'express'
import Product from '../models/Product.js'
import connectDB from '../utils/connectDB.js'

export const productController = {
	// Gets documents and returns them as JSON
	get: async function (req: Request, res: Response) {
		try {
			await connectDB()
			const products = await Product.find()
			res.json(products)
		} catch (e) {
			res.status(400).send(e.message)
		}
	},
	// Expects request body to have default/required data to create a document.
	// Sends back created document as JSON.
	post: async function (req: Request, res: Response) {
		try {
			await connectDB()
			const product = await Product.create(req.body)
			await product.save()
			res.status(200).json(product)
		} catch (e) {
			res.status(400).send(e.message)
		}
	},
	// Expects an id and update(Object)
	// Uses id to find a document
	// Uses update(Object) to update document
	put: async function (req: Request, res: Response) {
		try {
			await connectDB()
			const { id, update }: { id: String; update: Object } = req.body
			const product = await Product.findById(id)
			product !== null
				? await putHelper(update, product, res)
				: res.status(400).send('Unable to find product')
		} catch (e) {
			res.status(400).send(e.message)
		}
	},
	// Delete product by id
	delete: async function (req: Request, res: Response) {
		try {
			await connectDB()
			await Product.findByIdAndDelete(req.body.id)
			res.status(200).send()
		} catch (e) {
			res.status(400).send(e.message)
		}
	},
}

// Takes in the put routes, req.body.update.
// Performs proper updates for each property on specified document
// @ts-ignore
async function putHelper(update, product, res: Response) {
	// Turns update object into an iterable array
	Object.entries(update).forEach(function ([key, value], _index) {
		console.log(key)
		console.log(value)
	})
	// await product.save()
	return res.status(200).send()
}
