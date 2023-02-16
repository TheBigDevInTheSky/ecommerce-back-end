import { Request, Response, Router } from 'express'
import Categories from '../models/Categories.js'
import connectDB from '../utils/connectDB.js'

export const categoriesRouter = Router()

categoriesRouter.get('/', async function (req: Request, res: Response) {
	try {
		await connectDB()
		const categories = await Categories.find()
		res.status(200).json(categories)
	} catch (e) {
		res.status(400).send(e.message)
	}
})

categoriesRouter.post('/', async function (req: Request, res: Response) {
	try {
		await connectDB()
		const category = await Categories.create(req.body.category)
		await category.save()
		res.status(200).send()
	} catch (e) {
		res.status(400).send(e.message)
	}
})

categoriesRouter.delete('/', async function (req: Request, res: Response) {
	try {
		await connectDB()
		await Categories.findByIdAndDelete(req.body.id)
		res.status(200).send()
	} catch (e) {
		res.status(400).send(e.message)
	}
})
