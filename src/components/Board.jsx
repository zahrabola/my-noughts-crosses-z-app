import React from 'react';
import Tile from "./Tile"
import Strike from './Strike';

const Board = ({tiles, onClickTile, userTurn}) => {
    return (
        <div className="board">
            
            <Tile 
            userTurn={userTurn}
             onClick = {()=> onClickTile(0)} 
             value={tiles[0]} 
              className="r-border b-border"
              /> 
            <Tile 
            userTurn={userTurn} 
             onClick = {()=> onClickTile(1)}
             value={tiles[1]} 
            className="r-border b-border"
            />  
            <Tile 
            userTurn={userTurn} 
            onClick = {()=> onClickTile(2)} 
             value={tiles[2]}
              className=" b-border"
            />  
            <Tile 
            userTurn={userTurn} 
            onClick = {()=> onClickTile(3)}
             value={tiles[3]}
             className="r-border b-border"
            /> 
            <Tile 
            userTurn={userTurn} 
            onClick = {()=> onClickTile(4)}
             value={tiles[4]}
             className="r-border b-border"
            />  
            <Tile 
            userTurn={userTurn}
             onClick = {()=> onClickTile(5)} 
            value={tiles[5]} 
            className=" b-border"
            />
            <Tile 
            userTurn={userTurn}
             onClick = {()=> onClickTile(6)}
             value={tiles[6]}
            className="r-border"
            />
            <Tile 
            userTurn={userTurn} 
            onClick = {()=> onClickTile(7)}
             value={tiles[7]} 
            className="r-border "
            />
            <Tile 
            userTurn={userTurn}
            onClick = {()=> onClickTile(8)} 
             value={tiles[8]}
             />
            
            <Strike /> 
        </div>
    );
    
}

export default Board;
