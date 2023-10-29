import React from 'react';
import Board from "./Board";
import GameOver from "./GameOver";
import Reset from "./Reset";

const NoughtsCrosses = () => {
    return (
        <div>
         <h1>Noughts & Crosses</h1>
         <Board />
         <GameOver />
         <Reset />
        </div>
    );
}

export default NoughtsCrosses;
