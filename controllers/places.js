
const Place = require('../models/place.js')

const router = require('express').Router()
const db = require('../models')



//Index// A List
router.get('/', (req, res) => {
    db.Place.find()
      .then((places) => {
        res.render('places/index', { places})
      })  
      .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
      
 })

//POST//Create

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {    
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
  }
  else {
      res.render('error404')
  }
  })
})


//New
router.get('/new', (req, res) => {
  res.render('places/new')
})


//SHOW///

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


//PUT
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})


// DELETE
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})


// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/edit', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})


module.exports=router

  
      
    



