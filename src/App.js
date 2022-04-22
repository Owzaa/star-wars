import React, { useEffect, useState } from "react"
import './App.css';
import { List } from './components/ListePeople/ListFilms';
import { fetchData } from "./components/API/api";
import SearchAppBar from "./components/searchBar/appBar";
import SearchData from "./SearchData"
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

      
     
  <div className="ListContainer" >

          <List films={film}/>
        </div>

      </header>
    </div>
  );
}

export default App;
