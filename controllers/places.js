const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')

  })

// GET Places

router.get('/places/:id', (req, res) => {
  

module.exports = router

    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/images/max-griss-otLqpb9LK70-unsplash.jpg'
      },
       {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/images/yeh-xintong-go3DT3PpIw4-unsplash.jpg'  
      }]
      
    res.render('places/index', {places})
    
})

module.exports = router
