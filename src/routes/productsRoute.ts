import { Request, Response, Router } from 'express'
import Product from '../models/Product.js'
import connectDB from '../utils/connectDB.js'

export const productsRouter = Router()

productsRouter.get('/', async function (req: Request, res: Response) {
	try {
		await connectDB()
		const products = await Product.find()
		res.json(products)
	} catch (e) {
		res.status(400).send(e.message)
	}
})

productsRouter.post('/', async function (req: Request, res: Response) {
	try {
		await connectDB()
		const product = await Product.create(req.body.product)
		await product.save()
		res.status(200).json(product)
	} catch (e) {
		res.status(400).send(e.message)
	}
})

// Find product by id, then updates the amount.
// Takes both positive and negative numbers to adjust the amount.
productsRouter.put('/', async function (req: Request, res: Response) {
	try {
		await connectDB()
		const product = await Product.findById(req.body.id)
		if (product.amount === 0) return res.status(200).send()

		product.amount += req.body.amount
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
