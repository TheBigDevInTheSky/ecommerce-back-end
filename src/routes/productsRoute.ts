import { Request, Response, Router } from 'express'
import Product from '../models/Product.js'


export const productsRouter = Router()

productsRouter.get('/', async function(req:Request, res:Response){
	try {
		const products = await Product.find()
		res.json(products)
	} catch (e) {
		res.status(400).send(e.message)
	}
})

productsRouter.post('/', async function(req:Request, res:Response) {
	try {
		const product = await Product.create(req.body.product)
		await product.save()
		res.status(200).json(product)
	} catch (e) {
		res.status(400).send(e.message)
	}
})