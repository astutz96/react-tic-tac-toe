import React, { useState } from 'react';
import Tile from '../Tile/tile';

function GameBoard(){

    const boardVals = ['','','','','','','','',''];

    const [board, setBoard] = useState(boardVals)
    
    const onTileClick = (tileIndex, tileSymbol) => {
        let newBoard = [...board];
        newBoard[tileIndex] = tileSymbol === 'X' ? 'O' : 'X'
        setBoard(newBoard)
    }
    return(
        <div>
            {
                board.map((symbol, id) => (
                    <Tile 
                        tileSymbol={symbol}
                        onClick={onTileClick}
                        tileIndex ={id}
                        key={id}
                    />   
                ))
            }
        </div>
    )
}

export default GameBoard; 