import React from "react";
import Board from "./Board";
import { useState, useEffect } from "react";
import GameOver from "./GameOver";
import GamesState from "./GamesState";
import Reset from "./Reset";

const UserPlayer_X = "X";
const UserPlayer_O = "O";

const winCombo = [
  //rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  // coloumns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },
  //Diagonal
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWin(tiles, setstrikeClass, setGameState) {
  //// console.log("Check Winner")
  for (const { combo, strikeClass } of winCombo) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setstrikeClass(strikeClass);
      if (tileValue1 === UserPlayer_O) {
        setGameState(GamesState.UserPlayer_Owins);
      } else {
        setGameState(GamesState.UserPlayer_Xwins);
      }
      return;
    }
  }

  /// draw check
  const allTilesFilled = tiles.every((tile) => tile !== null);
  if (allTilesFilled) {
    setGameState(GamesState.draw);
  }
}

const NoughtsCrosses = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [userTurn, setuserTurn] = useState(UserPlayer_X);
  const [stikeClass, setstrikeClass] = useState();
  const [gameState, setGameState] = useState(GamesState.inProgress);

  const handleClickTile = (index) => {
    if (gameState !== GamesState.inProgress) {
      return;
    }

    //if statement that checkes the value
    if (tiles[index] !== null) {
      return;
    }

    console.log(index);
    const newTiles = [...tiles];
    newTiles[index] = userTurn;
    setTiles(newTiles);
    if (userTurn === UserPlayer_X) {
      setuserTurn(UserPlayer_O);
    } else {
      setuserTurn(UserPlayer_X);
    }
  };

  const handleReset = () => {
    //console.log("reset")
    setGameState(GamesState.inProgress);
    setTiles(Array(9).fill(null));
    setuserTurn(UserPlayer_X);
    setstrikeClass(null);
  };

  useEffect(() => {
    checkWin(tiles, setstrikeClass, setGameState);
  }, [tiles]);

  return (
    <div>
      <h1>Noughts & Crosses</h1>
      <Board
        stikeClass={stikeClass}
        userTurn={userTurn}
        tiles={tiles}
        onClickTile={handleClickTile}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
    </div>
  );
};

export default NoughtsCrosses;
