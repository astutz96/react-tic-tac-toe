import React from 'react';

function Tile(props){
    const {tileData, onClick} = props; 
    return (
        <button onClick={() => onClick(tileData.position)}>
        {tileData.symbol}</button>
        
    )
}

export default Tile;