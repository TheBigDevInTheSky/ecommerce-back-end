import { Router } from 'express'
import { productController as pc } from '../controllers/index.js'

export const productsRouter = Router()

// TODO:
// REFACTOR PUT METHOD TO ACCEPT AN UPDATE OBJECT
// EACH PROPERTY IN THAT OBJECT SHOULD REFERENCE THE DOCUMENTS PROPERTIES YOU WANT TO UPDATE
// CREATE A SYSTEM OR FUNCTION(S) TO HANDLE EACH PROPERTIES UPDATE, SINCE NOT ALL DATA IS HANDLED THE SAME
// REMOVE THE THE S FROM ('products') THE ENDPOINT, AND UPDATE YOUR HTTP REQUEST'S ON INSOMNIA & THE FRONT-END

productsRouter.get('/', pc.get)
productsRouter.post('/', pc.post)
productsRouter.put('/', pc.put)
productsRouter.delete('/', pc.delete)
