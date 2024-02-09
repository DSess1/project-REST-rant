//Modules and Globals
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
//module.exports.Place = require('./places')

//DEPENDENCIES
const methodOverride = require('method-override')


//CONFIGURATION
const PORT = process.env.PORT


//Express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))//to let Express know the name of the static folder
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


//Controllers and Routers
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) =>{
    res.render('home')
})
//error404 page
app.get('*', (req, res) => {
    res.render('error404')
})


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB:', process.env.MONGO_URI)
        // Listen for connections after successful database connection
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error)
    })

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })