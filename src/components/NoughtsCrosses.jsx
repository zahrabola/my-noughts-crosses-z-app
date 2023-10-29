import React from 'react';
import Board from "./Board";
import GameOver from "./GameOver";
import Reset from "./Reset";
import { useState } from 'react';

const UserPlayer_X = 'X';
const UserPlayer_O = 'O';

const handleClickTile = (index) => {
    console.log(index)
}



const NoughtsCrosses = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [userTurn, setuserTurn] = useState(UserPlayer_X)
    return (
        <div>
         <h1>Noughts & Crosses</h1>
         <Board tiles={tiles} onClickTile={handleClickTile} />
         <GameOver />
         <Reset />
        </div>
    );
}

export default NoughtsCrosses;
