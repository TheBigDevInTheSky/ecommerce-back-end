const { categories } = require('../utils')
const router = require('express').Router()

router.get('/', function(req, res){
    try{
        // const { body } = req

        res.status(200).json(categories)
    }catch(e){
        console.log(e.message)
        res.status(400).send(e.message)
    }
})

module.exports = router
