const express = require('express')
const router = require('express').Router()
const places = require('../models/places.js')


//New
router.get('/new', (req, res) => {
     res.render('places/new')
})


//SHOW
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})



//Home
router.get('/:id', (req, res) => {
  res.render('places/home')
})




//Index
router.get('/', (req, res) => {
  res.render('places/index', {places})
})
//{ places: places })



//EDIT ROUTE
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})



//PUT
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect('/places/${id}')
  }
})



//POST
router.post('/', (req, res) => {
 // console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

//DELETE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})



.get('/', (req, res) => {
  let places = [{
   name: 'H-Thai-ML',
    city: 'Seattle',
   state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/images/emy-XoByiBymX20-unsplash (1).jpg'
  
    
  },
  {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/images/mink-mingle-qZ5lPCPvdXE-unsplash.jpg'  
  }]
   
    res.render('places/index',{places})
  })                               



module.exports = router

  
      
    



