import React from 'react';

function CatFactsCard(props){
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
            <h1 style={style.title}>Cat Fact #{props.factNumber}</h1>
            <p style={style.subtitle}>{props.fact}</p>
        </div>
    );
}

export default CatFactsCard;