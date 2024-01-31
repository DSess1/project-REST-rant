
const router = require('express').Router()
const places = require('../models/places.js')


//New
router.get('/new', (req, res) => {
     res.render('places/new')
})


//Home
router.get('/:id', (req, res) => {
  res.render('places/home')
})


//Index
router.get('/', (req, res) => {
  res.render('places/index', { places: places });
});

module.exports = router

  
      
    



