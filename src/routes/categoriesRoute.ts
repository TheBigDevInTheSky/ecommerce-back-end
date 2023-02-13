import { Request, Response, Router } from 'express'
import Categories from '../models/Categories.js'
import connectDB from '../utils/connectDB.js'

export const categoriesRouter = Router()

categoriesRouter.get('/', async function (req: Request, res: Response) {
	const dbConnection = await connectDB()
	try {
		const categories = await Categories.find()
		await dbConnection.disconnect()
		res.status(200).json(categories)
	} catch (e) {
		await dbConnection.disconnect()
		res.status(400).send(e.message)
	}
})

categoriesRouter.post('/', async function (req: Request, res: Response) {
	const dbConnection = await connectDB()
	try {
		const category = await Categories.create(req.body.category)
		await category.save()

		await dbConnection.disconnect()
		res.status(200).send()
	} catch (e) {
		await dbConnection.disconnect()
	}
})

categoriesRouter.delete('/', async function (req: Request, res: Response) {
	const dbConnection = await connectDB()
	try {
		await Categories.findByIdAndDelete(req.body.id)

		await dbConnection.disconnect()
		res.status(200).send()
	} catch (e) {
		await dbConnection.disconnect()

		res.status(400).send(e.message)
	}
})
