import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { List } from './components/ListePeople/ListFilms';
import { fetchData } from "./components/API/api";
import SearchAppBar from "./components/searchBar/appBar";
import FilmDetails from "./components/filmDetails"
function App() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetchData().then(response => setFilm(response))
  })


      
  return ( 
  <div className="App">
    <Router>
      <Switch>
     
        <Route exact path="/details/" component={FilmDetails} />
      </Switch>
    </Router>
   
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
