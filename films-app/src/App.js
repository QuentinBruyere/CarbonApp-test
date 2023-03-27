import React, { useState } from 'react';
import Header from './Header';
import Film from './film';

const appStyle = {
    app: {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(48,48,48,1) 100%)",
        minHeight: "100vh"
    },
    form: {
        display: "Flex",
        flexFlow: "row nowrap",
        alignItems: "center",

        input: {
            width: "400px",
            height: "50px",
            fontSize: "1.5rem",
            padding: "0 3%",
            border: "none",
            borderRadius: "15px 0 0 15px",

        },

        button: {
            height: "50px",
            fontSize: "1.25rem",
            borderRadius: "0 15px 15px 0",
            border: "none",
            backgroundColor: "#b0b0b0",
            padding: "0 3%",
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
  }

  // afficher le resultat de la recherche
  function handleSubmit(event) {
    event.preventDefault();

    setSearched(true);

    const filmRequest = "https://api.tvmaze.com/search/shows?q=" + query;

    fetch(filmRequest)
    .then(res => res.json())
    .then(
        (result) => {
        setIsLoaded(true);
        setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        setIsLoaded(true);
        setError(error);
        }
    )
  }

  return (

    <div className="App" style={appStyle.app}>
        <Header/>
        <form method="GET" onSubmit={handleSubmit} style={appStyle.form}>
            <input className="searchBar" type="text" placeholder="Breaking Bad, Simpsons..." onChange={handleChange} style={appStyle.form.input}></input>
            <button type="submit" style={appStyle.form.button}>search</button>
        </form>
        {searched ? <Film error={error} isLoaded={isLoaded} items={items}/> : null}
    </div>

  )
}

// ChatGPT's response to load a font by a component
const fontUrl = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap';

// Dynamically load the font stylesheet
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;
document.head.appendChild(link);

export default App;
