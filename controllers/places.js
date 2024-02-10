
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
  if (req.body.pic === '') { req.body.pic = undefined }
  if (req.body.city === '') { req.body.city = undefined }
  if (req.body.state === '') { req.body.state = undefined }
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
  .populate('comments')
  .then(place => {
      console.log(place.comments)
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

//POST
router.post('/:id/comment', (req, res) => {
  console.log('post comment', req.body)
  if (req.body.author === '') { req.body.author = undefined }
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
      .then(place => {
          db.Comment.create(req.body)
              .then(comment => {
                  place.comments.push(comment.id)
                  place.save()
                      .then(() => {
                          res.redirect(`/places/${req.params.id}`)
                      })
                      .catch(err => {
                          res.render('error404')
                      })
              })
              .catch(err => {
                  res.render('error404')
              })
      })
      .catch(err => {
          res.render('error404')
      })
})

// DELETE
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('Success')
      res.redirect('/places/${req.params.id}')
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

  
      
    



