
const Place = require('../models/places.js')
const db = require('../models')
const router = require('express').Router()



//New
router.get('/new', (req, res) => {
     res.render('places/new')
})


//SHOW

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


//Home
router.get('/:id', (req, res) => {
  res.render('places/home')
})


//Index/Get Places

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

//{ places: places })



//EDIT ROUTE
router.get('/:id/edit', (req, res) => {
     res.send('GET edit from stub')
})



//PUT
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})



//POST

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.post('/:id/rant', (req, res) => {
     res.send('GET /places/:id/rant stub')
})
//DELETE
router.delete('/:id/rant/:rant:Id', (req, res) => {
     res.send('GET /places/:id/rant/:rantId stub')
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

  
      
    



