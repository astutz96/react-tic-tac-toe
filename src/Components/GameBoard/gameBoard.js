import React from 'react';
import Tile from '../Tile/tile';

function GameBoard(){
    const BoardStatus = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

    const onTileClick = () => {
        console.log('Tile Clicked');
    }
    return(
        <div>
            {
                BoardStatus.map((symbol, id) => (
                    <Tile 
                        tileSymbol={symbol}
                        onClick={onTileClick}
                        key={id}
                    />   
                ))
            }
        </div>
    )
}

export default GameBoard;