require('dotenv').config()
const express = require('express')
const server = express()
const cors = require('cors')
// const mongoose = require('mongoose')
const { categoriesRouter, productsRouter } = require('./src/routes')

// TODO: Add to env file
const PORT = 3000

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors())

server.get('/', function(_req, res){
    res.send('Hello World')
})

server.use('/products', productsRouter)
server.use('/categories', categoriesRouter)

server.listen(PORT, function(){
    console.log('Server is listening on port '.concat(PORT))
})
