import React from 'react';

function Tile(props){
    return (
        <button onClick={props.onClick}>{props.tileSymbol}</button>
    )
}

export default Tile;