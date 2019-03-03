import React from 'react';

function Card(){
    let style = {
        container: {
            backgroundColor: "white",
            borderRadius: "7px",
            padding: "10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            marginBottom: "10px",
            width: "80%"
        },
        title: {
            color: "black"
        },
        subtitle: {
            color: "grey"
        }
    }

    return (
        <div style={style.container}>
            <h1 style={style.title}>Welcome to KnightHacks</h1>
            <p style={style.subtitle}>How are you today</p>
        </div>
    );
}

export default Card;