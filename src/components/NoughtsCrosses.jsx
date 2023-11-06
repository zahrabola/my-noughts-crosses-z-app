import React from 'react';
import Board from "./Board";
//import GameOver from "./GameOver";
//import Reset from "./Reset";
import { useState, useEffect  } from 'react';

const UserPlayer_X = 'X';
const UserPlayer_O = 'O';

function checkWin(){
    console.log("Check Winner")
}


const NoughtsCrosses = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [userTurn, setuserTurn] = useState(UserPlayer_X)
    const [stikeClass, setstrikeClass] = useState()

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

    
useEffect (() => {
    checkWin()
}, [tiles])

    
    return (
        <div>
         <h1>Noughts & Crosses</h1>
         <Board stikeClass={stikeClass} userTurn={userTurn} tiles={tiles} onClickTile={handleClickTile} />
    
        </div>
    );
}

export default NoughtsCrosses;
