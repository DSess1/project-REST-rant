const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>

          <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
              Edit
          </a>     
 
          <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
               Delete
            </button>
          </form> 
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt={data.place.name} />
          </main>
        </Def>
    )
}

module.exports = show


