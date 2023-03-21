import React from 'react';

function Film({error, isLoaded, items}) {

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

export default Film