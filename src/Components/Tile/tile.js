import React from 'react';

function Tile(props){
    const {tileSymbol, onClick, tileIndex} = props; 
    return (
        <button onClick={() => onClick(tileIndex, tileSymbol)}>
        {props.tileSymbol}</button>
    )
}

export default Tile;