
const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://unsplash.com/photos/cnTdKzMOBns/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8ODR8fHJlc3RhdXJhbnR8ZW58MHx8fHwxNzA3NTMxNTM4fDA&force=true&w=600',
    
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://unsplash.com/photos/ptLWrQH2wn8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fGNvZmZlZSUyMGNhdHxlbnwwfHx8fDE3MDc1MzAxNzR8MA&force=true&w=640',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})

