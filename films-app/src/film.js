import React from 'react';

function Film({error, isLoaded, items}) {

let filmStyle = {
    li: {
        listStyle: "none"
    }
}



if (error) {
    return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
    return <div>Loading...</div>;
} else {

    // let filmList = getItem(result);
    // let filmList = localStorage.getItem();
    // console.log(filmList);
    
    console.log(items);
    console.log(items[0].show.image.medium);

    return (
    <ul>
        {items.map(item => (
        <li key={item.show.id} style={filmStyle.li}>
            <h3>{item.show.name}</h3>
            <p>{item.show.id}</p>

            {/* <p>{item.show.image.medium}</p> */}

            {item.show.image.medium ? <img src={item.show.image.medium} alt="MovieImage" /> : <p>img not found</p>}
            {/* <img src={item.show.image.medium ? item.show.image.medium : "img not found"} alt="MoviePicture"/> */}

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