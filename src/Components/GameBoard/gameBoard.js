import React from 'react';
import Tile from '../Tile/tile';

function GameBoard(){
    const BoardStatus = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
    return(
        <div>
            {
                BoardStatus.map(symbol => (
                    <Tile tileSymbol={symbol}/>   
                ))
            }
        </div>
    )
}

export default GameBoard;