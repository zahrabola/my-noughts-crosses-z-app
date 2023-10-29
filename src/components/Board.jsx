import React from 'react';
import Tile from "./Tile"
import Strike from './Strike';

const Board = ({tiles}) => {
    return (
        <div className="board">
            
            <Tile value={tiles[0]} className="r-border b-border"/> 
            <Tile  value={tiles[1]} className="r-border b-border"/>  
            <Tile  value={tiles[2]}  className=" b-border"/>  
            <Tile  value={tiles[3]} className="r-border b-border"/> 
            <Tile  value={tiles[4]} className="r-border b-border"/>  
            <Tile  value={tiles[5]} className=" b-border"/>
            <Tile  value={tiles[6]} className="r-border"/>
            <Tile  value={tiles[7]} className="r-border "/>
            <Tile  value={tiles[8]} />
            
            <Strike /> 
        </div>
    );
}

export default Board;
