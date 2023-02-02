import { Router } from 'express'
import products from '../utils/products.js'


export const productsRouter = Router()

productsRouter.get('/', function(req, res) {
	try {
		// const { body } = req
		res.status(200).json(products)
	} catch (e) {
		console.log(e.message)
		res.status(400).send(e.message)
	}
})