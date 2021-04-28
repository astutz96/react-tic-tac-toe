import React from 'react';
import Tile from './Components/Tile/tile'

function TicTacToeGame() {
    const tileSymbol = {
        X: 'X',
        Y: 'Y', 
        Tie: ''
    }

    return (
        <div>
            <Tile tileSymbol='X'/>
            <Tile tileSymbol='X'/>
            <Tile tileSymbol='X'/>
            <Tile tileSymbol='X'/>
            <Tile tileSymbol='X'/>
            <Tile tileSymbol='X'/>
            <Tile tileSymbol='X'/>
            <Tile tileSymbol='X'/>
            <Tile tileSymbol='X'/>
            {/* <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button> */}
        </div>
    )
}

export default TicTacToeGame;