import React from "react"

export const List = ({ films }) => {
  return(
   <div>
   <h1>LISTED FILMS</h1>
   <ul>
      {films.map(results => {
          return <div key={results.id}>
            
            {results.title}
            {results.producer}
            {results.release_date}  
          
         </div>
      })}
    </ul>
  </div>
  )
}