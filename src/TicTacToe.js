import React from 'react';
import Tile from './Components/Tile/tile'

function TicTacToeGame() {
    const BoardStatus = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

    return (
        <div>
            {
                BoardStatus.map(symbol => (
                    <Tile tileSymbol={symbol}/>   
                ))
            }
        </div>
    )
}

export default TicTacToeGame;