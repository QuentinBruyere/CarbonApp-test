import React from 'react';

const headerStyle = {
    header: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        marginBottom: "2rem"
    },
    h1: {
        color: "#f0f0f0",
        fontFamily: 'Poppins, sans-serif',
        fontSize: "2.5rem",
    },
    img: {
        width: "70px",
        height: "70px",
        position: "absolute",
        top: "15%",
        left: "5%",
    }
}

function Header() {

    return (
        <div style={headerStyle.header}>
            <img src="/watch_finder_logo.png" style={headerStyle.img} alt="logo"/>
            <h1 style={headerStyle.h1}>WATCH FINDER</h1>
        </div>
    )
}

export default Header