import React, { useState } from "react"




export default function SearchForm (props) {
  const [films, setFilms] = React.useState('')


  const handleSubmit = event => {
      event.preventDefault()
  
      films
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
          films
          type="text"
          value={this.name.value|| ''}
          onChange={name => searchFilms(this.name.target.value)}
          placeholder="Search by Film (name) "
          required
        />
        <button type="submit">Search</button>
      </form>
    )
}

