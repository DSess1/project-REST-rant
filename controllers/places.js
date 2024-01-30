
const router = require('express').Router()
const places = require('../models/places.js')


//New
router.get('/new', (req, res) => {
     res.render('places/new')
})

// GET Places
//app.get('/', (req, res) => {
//  res.render('places/index')
//})

//Home
router.get('/:id', (req, res) => {
  res.render('places/home')
})




//Index
router.get('/index', (req, res) =>{
  res.render('places/index')
})

module.exports = router

  
      
    



