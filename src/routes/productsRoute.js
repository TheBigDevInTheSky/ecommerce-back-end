const router = require('express').Router()

router.get('/products', function (req, res) {
    try {
        const { body } = req
        console.log(body)

        res.send('products successful')
    } catch (e) {
        console.log(e)
        res.send('products error')
    }
})

module.exports = router
