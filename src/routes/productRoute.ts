import { Router } from 'express'
import { productController as pc } from '../controllers/index.js'

export const productRouter = Router()

productRouter.get('/', pc.get)
productRouter.post('/', pc.post)
productRouter.put('/', pc.put)
productRouter.delete('/', pc.delete)
