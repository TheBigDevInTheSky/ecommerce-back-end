import { Request, Response, Router } from 'express'
import Product from '../models/Product.js'
import connectDB from '../utils/connectDB.js'

export const productsRouter = Router()

// Gets documents and returns them as JSON
productsRouter.get('/', async function (req: Request, res: Response) {
	try {
		await connectDB()
		const products = await Product.find()
		res.json(products)
	} catch (e) {
		res.status(400).send(e.message)
	}
})

// Expects request body to have default/required data to create a document.
// Sends back created document as JSON.
productsRouter.post('/', async function (req: Request, res: Response) {
	try {
		await connectDB()
		const product = await Product.create(req.body)
		await product.save()
		res.status(200).json(product)
	} catch (e) {
		res.status(400).send(e.message)
	}
})

// Expects an id and update(Object)
// Uses id to find a document
// Uses update(Object) to update document
productsRouter.put('/', async function (req: Request, res: Response) {
	try {
		await connectDB()

		const { id, update }: { id: String; update: Object } = req.body

		const product = await Product.findOneAndUpdate(
			{ id }, // Find one by id
			update // Object with the properties we want to update
		)
		if (product === null)
			return res.status(400).send('Unable to find product')

		await product.save()

		res.status(200).send()
	} catch (e) {
		res.status(400).send(e.message)
	}
})

productsRouter.delete('/', async function (req: Request, res: Response) {
	try {
		await connectDB()
		await Product.findByIdAndDelete(req.body.id)
		res.status(200).send()
	} catch (e) {
		res.status(400).send(e.message)
	}
})
