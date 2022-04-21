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


    const searchFilms = async name => {
      if(name.length < 3 || name === '') return
      const res = await fetch(`https://swapi.dev/api/films/?search={name}`)
      const data = await res.json()
      await console.log(data)
      await setFilms(data)
  }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={films}
          onChange={name => searchFilms(name.target.value)}
          placeholder="Search by Film (name) "
          required
        />
        <button type="submit">Search</button>
      </form>
    )
}

