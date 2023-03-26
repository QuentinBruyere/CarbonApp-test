import React, { useEffect, useState } from 'react';
import Film from './film';

const appStyle = {
    app: {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
    },
    form: {
        display: "Flex",
        flexFlow: "row nowrap",
        alignItems: "center",
        marginTop: "10%",

        input: {
            width: "400px",
            height: "50px",
            fontSize: "1.5rem",
            padding: "0 3%",
            border: "1px solid grey"
        },

        button: {
            height: "50px",
            fontSize: "1.5rem"
        }
    }
}

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);

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

    setSearched(true);

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
    console.log(searched);
  }

  console.log(searched);

  return (

    <div className="App" style={appStyle.app}>
        <form method="GET" onSubmit={handleSubmit} style={appStyle.form}>
            <input className="searchBar" type="text" placeholder="Breaking Bad, Simpsons, Kill Bill..." onChange={handleChange} style={appStyle.form.input}></input>
            <button type="submit" style={appStyle.form.button}>Search</button>
        </form>
        {searched ? <Film error={error} isLoaded={isLoaded} items={items}/> : null}
    </div>

  )
}

export default App;
