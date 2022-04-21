import React, { useEffect, useState } from "react"
import './App.css';
import { List } from './components/ListePeople/ListFilms';
import { fetchData } from "./components/API/api";
function App() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetchData().then(response => setFilm(response))
  })



  return (
    <div className="App">
      <header className="App-header">
       <span className="searchBar"> 
       </span>
      
      <div className="container" id="filmContainer">


    <List films={film}/>





      </div>
       
      </header>
    </div>
  );
}

export default App;
