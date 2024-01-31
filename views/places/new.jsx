const React = require('react')
const Def = require('../default')


function New () {
    return (
        <Def>
          <head>
          <link rel="stylesheet" href="/css/style.css"/>
          </head>
          <main>
            <h1>Add a New Place</h1>
           <form method="POST" action="/places">
             <div>
               <label htmlFor="name">Place Name</label>
               <input id="name" name="required" />
             </div>
             <div>
               <label htmlFor="pic">Place Picture</label>
               <input type="url" id="pic" name="pic" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input id="city" name="city" />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <input id="state" name="state" />
            </div>
            <div>
              <label htmlFor="cuisines">Cuisines</label>
              <input id="cuisines" name="required" />
            </div>
              <input type="submit" value="Add Place" />
              </form>

           </main>
        </Def>
    )
}

module.exports = New
