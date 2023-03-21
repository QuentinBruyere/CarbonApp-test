import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let filmRequest = null ;

  

  // afficher le resultat de la recherche
  function handleSubmit(event) {
    // alert('Valeur de la recherche ' + this.state.value);
    event.preventDefault();
    filmRequest = "https://api.tvmaze.com/search/shows?q=girls" + query;
    console.log(query);
  }

  function Film() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState([]);
  
    // stocker la valeur de l'input qqpart
    function handleChange(event) {
      // console.log(event.target.value);
      setQuery();
      // query = event.target.value;
    }

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(filmRequest)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            // console.log(result[0].show.name);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      // let filmList = getItem(result);
      // let filmList = localStorage.getItem();
      // console.log(filmList);

      return (
        <ul>
          {items.map(item => (
            <li key={item.show.id}>
              {item.show.name}
            </li>
          ))}
        </ul>

        // <div className="filmCard">
        //   <h3 className="filmTitle">{items[0].show.name}</h3>
        // </div>
      );
    }
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
    <Film />
    </div>
  )
}

export default App;
