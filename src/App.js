import React, { useEffect, useState } from "react"
import './App.css';
import { List } from './components/ListePeople/ListFilms';
import { fetchData } from "./components/API/api";
import SearchAppBar from "./components/searchBar/appBar";
function App() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetchData().then(response => setFilm(response))
  })



  return (
    <div className="App">
      <header className="App-header">
        <span className="searchBar">
          <SearchAppBar />
        </span>
      if()
        <div className="ListContainer" >
        <main >
        <h3>Search Results: </h3>
        {film && (
          <ul>
            {film.map(film => (
              <li key={film.name}>{film.name}</li>
            ))}
          </ul>
        )}
      </main>


          <List films={film} spacing={1} variant="contained" />
        </div>

      </header>
    </div>
  );
}

export default App;
