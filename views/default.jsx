
const React = require('react')


function Def (html) {
  return (
      <html>
          <head>
              <title>Title</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
              <link rel="stylesheet" href="/css/style.css"/> 
          </head>
          <body>
              <nav className="navbar navbar-expand-1g justify-content-center">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link" href="/">Home</a>
                      </li>
                     {/* <li className="nav-item">
                          <a className="nav-link" href="/places">Places</a>
                       </li> */}
                      <li className="nav-item">  
                          <a className="nav-link" href="/places/new">Add Place</a>
                      </li>
                  </ul>
              </nav>

              {html.children}  
          </body>
      </html>
  )
}

module.exports = Def





















