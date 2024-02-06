
const Place = require('../models/places.js')

const router = require('express').Router()
const db = require('../models')



//Index
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


router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})



//DELETE
router.delete('/:id/rant/:rant:Id', (req, res) => {
     res.send('GET /places/:id/rant/:rantId stub')
})



//.get('/', (req, res) => {
 // let places = [{
 //  name: 'H-Thai-ML',
 //   city: 'Seattle',
 //  state: 'WA',
 //   cuisines: 'Thai, Pan-Asian',
 //   pic: '/images/images/emy-XoByiBymX20-unsplash (1).jpg'
  
    
  //},
 // {
 //   name: 'Coding Cat Cafe',
 //   city: 'Phoenix',
  //  state: 'AZ',
  //  cuisines: 'Coffee, Bakery',
  //  pic: '/images/images/mink-mingle-qZ5lPCPvdXE-unsplash.jpg'  
  //}]
   
 //   res.render('places/index',{places})
 // })                               



module.exports = router

  
      
    



