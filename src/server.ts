import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import { categoriesRouter, productRouter } from './routes/index.js'

// Configures dotenv
dotenv.config()

const server = express()
const PORT = process.env.PORT || 3001

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors())

server.get('/', function (req, res) {
	res.send('Hello World')
})

server.use('/product', productRouter)
// TODO:
// Update files/folder and requests removing the s from /categories
server.use('/categories', categoriesRouter)

server.listen(PORT, function () {
	console.log(`Server is listening on port ${PORT}`)
})
