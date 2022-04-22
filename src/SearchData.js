import React, { useState } from "react"




export default function SearchForm (props) {
  const [films, setFilms] = useState('')


  const handleSubmit = event => {
      event.preventDefault()
  
      
        .get(films)
        .then(resp => {
          props.onSubmit(resp.data)
          setFilms('')
        })
    }

    const searchFilms = async param => {
      if(param.length < 3 || param === '') return
      const res = await fetch(`https://swapi.dev/api/films/?search={param}`)
      const data = await res.json()
      await console.log(data)
      await setFilms(data)
  }
    return (
      <form onSubmit={handleSubmit}>
        <input
          films
          type="text"
          value={this.state.name|| ''}
          onChange={films => searchFilms(this.name.target.value)}
          placeholder="Search by Film (name) "
          required
        />
        <button type="submit">Search</button>
      </form>
    )
}

