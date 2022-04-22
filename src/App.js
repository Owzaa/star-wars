import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { List } from './components/ListePeople/ListFilms';
import { fetchData } from "./components/API/api";
import SearchAppBar from "./components/searchBar/appBar";
import Footer from "./components/Footer";
function App() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetchData().then(response => setFilm(response))
  })


      
  return ( 
 
 <>
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
   <section>
     <footer><Footer classNme="stickyBottom"/></footer> </section></>
  );
}

export default App;
