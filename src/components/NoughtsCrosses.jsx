import React from 'react';
import Board from "./Board";
//import Reset from "./Reset";
import { useState, useEffect  } from 'react';
import GameOver from './GameOver';
import GamesState from './GamesState';

const UserPlayer_X = 'X';
const UserPlayer_O = 'O';

const winCombo = [
    //rows
    {combo: [0, 1, 2], strikeClass: "strike-row-1" },
    {combo: [3, 4, 5], strikeClass: "strike-row-2" },
    {combo: [6, 7, 8], strikeClass: "strike-row-3" },
    // coloumns
    {combo: [0, 3, 6], strikeClass: "strike-column-1" },
    {combo: [1, 4, 7], strikeClass: "strike-column-2" },
    {combo: [2, 5, 8], strikeClass: "strike-column-3" },
    //Diagonal 
    {combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    {combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];


function checkWin( tiles, setstrikeClass){
  //// console.log("Check Winner")
  for( const {combo, strikeClass} of winCombo){
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];
 
    if(tileValue1 !==  null && tileValue1 === tileValue2 && tileValue1 === tileValue3 ){
        setstrikeClass(strikeClass)
    }
  }
}


const NoughtsCrosses = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [userTurn, setuserTurn] = useState(UserPlayer_X)
    const [stikeClass, setstrikeClass] = useState()
    const [gameState, setGameState] = useState (GamesState.inProgress)

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
    checkWin(tiles, setstrikeClass)
}, [tiles])

    
    return (
        <div>
         <h1>Noughts & Crosses</h1>
         <Board stikeClass={stikeClass} userTurn={userTurn} tiles={tiles} onClickTile={handleClickTile} />
    <GameOver gameState={gameState}/>
        </div>
    );
}

export default NoughtsCrosses;
