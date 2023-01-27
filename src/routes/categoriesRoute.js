const router = require('express').Router()

router.get('/categories', function (req, res) {
    try {
        const { body } = req
        console.log(body)

        res.send('categories successful')
    } catch (e) {
        console.log(e)
        res.send('categories error')
    }
})

module.exports = router
