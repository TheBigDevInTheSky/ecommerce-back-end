import { Request, Response, Router } from 'express'
import products from '../utils/products.js'


export const productsRouter = Router()

productsRouter.post('/', function(req :Request, res: Response) {
	try {
		const { body } = req
		checkBody(body)		

		res.status(200).json(products)
	} catch (e) {
		res.status(400).send(e.message)
	}
})


// Checks the body objec for product data
// Filter and check required prodcut properties
function checkBody(body){
	if(!body.product) throw Error("Missing product data")
	
	const REQUIRED_PROPERTIES = ['name', 'category', 'price', 'description']
	let errorString = ''
	
	// Loop through required properties for a product and concat to error string
	REQUIRED_PROPERTIES.forEach(function(prop, index){
		if(!body.product[prop]) 
			(REQUIRED_PROPERTIES.length - 1 === index ) 
			? errorString += `${prop}.` 
			: errorString+= `${prop}, `
	})
	
	// If error string has any length throw error
	if(errorString.length) throw Error(`Missing product properties: ${errorString}`)
}