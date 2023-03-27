import React from 'react';

const filmStyle = {
    ul: {
        padding: "0",
        margin: "0",
        marginTop: "2rem",
        display: "grid",
        width: "100%",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, auto))",
        gridTemplateRows: "repeat(auto-fit)",
        // gap: "auto"
    },

    li: {
        position: "relative",
        maxWidth: "210px",
        listStyle: "none",
        margin: "1rem",
        textAlign: "center"
    },

    div: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",

        h3: {
            margin: "0",
            color: "#f0f0f0",
            fontWeight: "600",
            marginTop: "5px"
        },
    },

    image: {
        error: {
            margin: "0",
            width: "210px",
            height: "295px",
        }
    }
}

function Film({error, isLoaded, items}) {

if (error) {
    return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
    return <div>Loading...</div>;
} else {

    return (
        <ul style={filmStyle.ul}>
            {items.map(item => (
            <li key={item.show.id} style={filmStyle.li}>
                <a href={item.show.url} target="_blank" rel="noreferrer" title={item.show.name}>
                    {item.show.image && item.show.image.medium ? <img src={item.show.image.medium} alt={item.show.name + `'s film image`} style={filmStyle.image}/> : <p style={filmStyle.image.error}>img not found</p>}
                </a>
                {/* <div style={filmStyle.div}>
                    <h3 style={filmStyle.div.h3}>{item.show.name}</h3>
                </div> */}
                <h3 style={filmStyle.div.h3}>{item.show.name}</h3>
            </li>
            ))}
        </ul>
    );
}
}

export default Film