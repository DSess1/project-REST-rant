const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
          </main>
          <link rel= "stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
          <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
            <div className="row">
              <div className="form-group col-sm-6">
                 <label htmlFor="name">Place Name</label>
                 <input className="form-control" id="name" name="name" value={data.name} required />
              </div>
              <div className="form-group col-sm-6">
                 <label htmlFor="pic">Place Picture</label>
                 <input className="form-control" type="url" id="pic"   name="pic" />
              </div>
            </div> 
            <div className="row">
              <div className="form-group col-sm-6">
                 <label htmlFor="city">City</label>
                 <input className="form-control" id="city" name="city"  value={data.city} required/>
              </div>
              <div className="form-group col-sm-6">
                 <label htmlFor="state">State</label>
                 <input className="form-control" id="state" name="state" value={data.state} required/> 
              </div>
            </div>
              <div className="form-group">
                 <label htmlFor="cuisines">Cuisines</label>
                 <input className="form-control" id="cuisines" name="cuisines"value ={data.cuisine} required/>
              </div>
                 <input className="btn btn-primary" type="submit" value="Add Place" />
             </form>

        </Def>
    )
}

module.exports = edit_form
