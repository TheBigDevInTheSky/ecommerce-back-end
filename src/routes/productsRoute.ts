import { Request, Response, Router } from 'express'
import Product from '../models/Product.js'
import connectDB from '../utils/connectDB.js'

export const productsRouter = Router()

productsRouter.get('/', async function (req: Request, res: Response) {
	const dbConnection = await connectDB()
	try {
		const products = await Product.find()
		await dbConnection.disconnect()
		res.json(products)
	} catch (e) {
		await dbConnection.disconnect()
		res.status(400).send(e.message)
	}
})

productsRouter.post('/', async function (req: Request, res: Response) {
	const dbConnection = await connectDB()
	try {
		const product = await Product.create(req.body.product)
		await product.save()
		await dbConnection.disconnect()
		res.status(200).json(product)
	} catch (e) {
		await dbConnection.disconnect()
		res.status(400).send(e.message)
	}
})

productsRouter.put('/', async function (req: Request, res: Response) {
	// Adds to the product amount
})

productsRouter.delete('/', async function (req: Request, res: Response) {
	const dbConnection = await connectDB()
	try {
		const product = await Product.findOneAndDelete({ _id: req.body.id })
		await product.save()
		await dbConnection.disconnect()
		res.status(200).json(product)
	} catch (e) {
		await dbConnection.disconnect()
		res.status(400).send(e.message)
	}
})
