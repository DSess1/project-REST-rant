const router = require('express').Router()

// More code here in a moment
router.get('/', (req, res) => {
    let places = []
    res.render('places/index')
    //GET /places
})

module.exports = router
