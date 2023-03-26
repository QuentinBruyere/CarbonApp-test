import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Film from './film';
import './App.css';


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');


  // stocker la valeur de l'input qqpart
  function handleChange(event) {
    
    setQuery(event.target.value);
    console.log(event.target.value);
    // query = event.target.value;
  }

  // afficher le resultat de la recherche
  function handleSubmit(event) {
    // alert('Valeur de la recherche ' + this.state.value);
    event.preventDefault();
    const filmRequest = "https://api.tvmaze.com/search/shows?q=" + query;

    fetch(filmRequest)
    .then(res => res.json())
    .then(
        (result) => {
        setIsLoaded(true);
        setItems(result);
        console.log(result[0].show.image.medium);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        setIsLoaded(true);
        setError(error);
        }
    )
    console.dir(query);
  }

  return (
    // <div className="App">
    //   <form method="GET">
    //     <input className="searchBar" type="text" placeholder="Breaking Bad, Simpsons, Kill Bill..."></input>
    //     <button type="submit" >Search</button>
    //   </form>
    //   <Film />
    // </div>

    <div className="App">
    <form method="GET" onSubmit={handleSubmit}>
      <input className="searchBar" type="text" placeholder="Breaking Bad, Simpsons, Kill Bill..." onChange={handleChange}></input>
      <button type="submit" >Search</button>
    </form>
    <Film error={error} isLoaded={isLoaded} items={items}/>
    </div>
  )
}

export default App;
