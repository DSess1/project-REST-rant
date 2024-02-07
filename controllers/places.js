
const Place = require('../models/places.js')

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


//router.post('/:id/rant', (req, res) => {
  //res.send('GET /places/:id/rant stub')
//})


// POST RANT
router.post('/:id/rant', (req, res) => {
  const { id } = req.params
  const { rant } = req.body
  // Will find the place by ID and update its 'rant' field with the new rant
  db.Place.findByIdAndUpdate(id, { $push: { rants: rant } }, { new: true })
    .then(place => {
      res.redirect(`/places/${id}`) // Will redirect back to the place's show page after posting the rant
    })
    .catch(err => {
      console.log('Error posting rant:', err)
      res.render('error404')
    })
})



//DELETE
//router.delete('/:id/rant/:rant:Id', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
//})

// DELETE RANT
router.delete('/:id/rant/:rantId', (req, res) => {
  const { id, rantId } = req.params;
  // Finds the place by ID and updates it's 'rants' array by removing the rant with the given ID
  db.Place.findByIdAndUpdate(id, { $pull: { rants: { _id: rantId } } }, { new: true })
    .then(place => {
      res.redirect(`/places/${id}`); // will redirect back to the place's show page after deleting the rant
    })
    .catch(err => {
      console.log('Error deleting rant:', err)
      res.render('error404')
    })
})





  .get('/', (req, res) => {
    let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/public/images/emy-XoByiBymX20-unsplash (1).jpg'
  
    
  },
  {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/public/images/mink-mingle-qZ5lPCPvdXE-unsplash.jpg'
  }]
   
    res.render('places/index',{places})
  })                               



module.exports = router

  
      
    



