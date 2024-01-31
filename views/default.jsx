const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
            <title>Title</title>
           <link rel="stylesheet" href= "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>{/* link to the home page */}
                </li>
                <li>
                 <a href="/places">Places</a>{/* link to the index page (/places) */}
                </li>
                <li>
                 <a href="/places/new">Add Place</a>{/* link to new form page (/places/new)  */}
                </li>
              </ul>
            </nav>

                {html.children}
            </body>
        </html>
    )
}

  
module.exports = Def
