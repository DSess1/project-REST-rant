//Modules and Globals
const express = require('express')
const mongoose = require('mongoose')



//DEPENDENCIES
const methodOverride = require('method-override')


//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


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

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('connected to mongo: ', process.env.MONGO_URI)
 })
 //module.exports.Place = require('./places')

//Listen for Connections
app.listen(process.env.PORT)
