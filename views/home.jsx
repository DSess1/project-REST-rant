const React = require('react')
const Def = require('./default')



function home () {
    return (
      <Def>
        <head>
        <link rel= "stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link> 
        <link rel="stylesheet" href="/css/style.css"/> 
        </head>
        <main>
          
          <h1>REST-Rant</h1>
          <div>
           <img src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"width="850px"  height="550px" alt="Chia Fruit Shake" />
          <div>
        
             Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"width="850px"  height="550px" alt="Chia Fruit Shake" >"Unsplash</a>        
           </div>
          </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
           </a>
           
       </main>
      </Def>
    )
  }
  

module.exports = home
