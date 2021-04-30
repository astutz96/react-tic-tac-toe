import React, { useState } from 'react';
import Tile from '../Tile/tile';

function GameBoard(){

    const boardData = [
        [
            {symbol:'', position:'TL'},
            {symbol:'', position:'TM'},
            {symbol:'', position:'TR'}
        ],
        [
            {symbol:'', position:'ML'},
            {symbol:'', position:'MM'},
            {symbol:'', position:'MR'}
        ],
        [
            {symbol:'', position:'BL'},
            {symbol:'', position:'BM'},
            {symbol:'', position:'BR'}
        ]
    ];

    const [board, setBoard] = useState(boardData)
    
    const onTileClick = (position) => {
        let newBoard = board.map(row =>
                row.map(col => (
                        col.position === position ? 
                            (col = {symbol: 'X', position: position}) : 
                            col = {symbol: col.symbol, position: col.position}
                    )   
                ) 
            )
        setBoard(newBoard)
    }
    return(
        <div>
            {board.map(row => 
                <div> 
                    {row.map((tileData) =>
                        <Tile 
                            tileData={tileData}
                            onClick={onTileClick}
                            key={tileData.position}
                        />
                    )} 
                </div>
            )}
        </div>
    )
}

export default GameBoard;  