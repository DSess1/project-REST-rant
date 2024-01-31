const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <a href="" className="btn btn-warning"> 
                  Edit
            </a> 
         <main>
            <h1>{ data.place.name }</h1>
          </main>
        </Def>
    )
}

module.exports = show


