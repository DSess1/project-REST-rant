const router = require('express').Router()



// More code here in a moment
router.get('/', (req, res) => {
    
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
    //GET /places
})

module.exports = router
