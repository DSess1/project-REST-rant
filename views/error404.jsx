

const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
        <head>
        <link rel="stylesheet" href="/css/style.css"/>
        </head>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fHww-unsplash.jpg"  alt="Coffe Cup"/>
                  <div>
                    Photo by<a href="AUTHOR_LINK">Mike Keneally</a> ON <a href="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fHww-unsplash.jpg">Unsplash</a>
                  </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
