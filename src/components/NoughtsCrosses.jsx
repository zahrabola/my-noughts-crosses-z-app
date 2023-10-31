import React from 'react';
import Board from "./Board";
//import GameOver from "./GameOver";
//import Reset from "./Reset";
import { useState } from 'react';

const UserPlayer_X = 'X';
const UserPlayer_O = 'O';




const NoughtsCrosses = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [userTurn, setuserTurn] = useState(UserPlayer_X)

    const handleClickTile = (index) => {
//if statement that checkes the value
if(tiles[index] !== null) {
    return;
}
        console.log(index)
        const newTiles = [...tiles];
        newTiles[index] = userTurn
        setTiles(newTiles)
        if(userTurn === UserPlayer_X){
            setuserTurn (UserPlayer_O);
        } else {
            setuserTurn(UserPlayer_X)
        }
    }
    
    return (
        <div>
         <h1>Noughts & Crosses</h1>
         <Board userTurn={userTurn} tiles={tiles} onClickTile={handleClickTile} />
    
        </div>
    );
}

export default NoughtsCrosses;
