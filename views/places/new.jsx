const React = require('react')
const Def = require('../default')


function New () {
    return (
        <Def>
          <head>
          <link rel= "stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link> 
          <link rel="stylesheet" href="/css/style.css"/>
          </head>
          <main>
            <h1>Add a New Place</h1>

            <form method="POST" action="/places">
              <div className="form-group">
                 <label htmlFor="name">Place Name</label>
                 <input className="form-control" id="name" name="name" required />
              </div>
              <div className="form-group">   
                 <label htmlFor="pic">Place Picture</label>
                 <input className="form-control" type="url" id="pic" name="pic" />
              </div>   
              <div className="form-group">
                 <label htmlFor="city">City</label>
                 <input className="form-control" id="city" name="city" />
              </div>   
             <div className="form-group">
                 <label htmlFor="state">State</label>
                 <input className="form-control" id="state" name="state" />
             </div> 
              <div className="form-group"> 

             
                 <label htmlFor="cuisines">Cuisines</label>
                 <input className="form-control" id="cuisines" name="cuisines" required />

              </div>
             <div className="form-group">
               <label for="founded">Founded Year</label>
                <input className="form-control" id="founded" name="founded" />
             </div>

                 <input className="btn btn-primary" type="submit" value="Add Place" />
            
             </form>

           </main>
        </Def>
    )
}

module.exports = New
