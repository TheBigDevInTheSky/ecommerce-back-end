import { Router } from 'express'
import categories from '../utils/categories.js'

export const categoriesRouter = Router()
categoriesRouter.get('/', function (req, res) {
	try {
		// const { body } = req
		res.status(200).json(categories)
	} catch (e) {
		console.log(e.message)
		res.status(400).send(e.message)
	}
})
