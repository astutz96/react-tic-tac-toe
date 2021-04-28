import react from 'react';

function Tile(props){
    const tileSymbol = {
        X: 'X',
        Y: 'Y', 
        Tie: ''
    }
    return (
        <button>{props.tileSymbol}</button>
    )
}

export default Tile;