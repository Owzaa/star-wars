import { useState } from "react"




export default function SearchForm (props) {
  const [films, setFilms] = useState('')


  const handleSubmit = event => {
      event.preventDefault()
  
      
        .get(searchFilms)
        .then(resp => {
          props.onSubmit(resp.data)
          setFilms('')
        })
    }


    const searchFilms = async term => {
      if(term.length < 3 || term === '') return
      const res = await fetch(`https://swapi.dev/api/films/?search={param}`)
      const data = await res.json()
      await console.log(data)
      await setFilms(data)
  }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={films}
          onChange={term => searchFilms(term.target.value)}
          placeholder="Search by Country (name) "
          required
        />
        <button type="submit">Search</button>
      </form>
    )
}

