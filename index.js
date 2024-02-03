//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

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

//Listen for Connections
app.listen(process.env.PORT)
