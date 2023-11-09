import React from 'react';
import GamesState from './GamesState';

const GameOver = ({ gameState}) => {
 switch (gameState) {
    case GamesState.inProgress:
        return <></>
         //player o
        case GamesState.UserPlayer_Owins:
            return<div className='game-over'>
                O wins
            </div>
            //player x
            case GamesState.UserPlayer_Xwins:
                return<div className='game-over'>
                    X wins
                </div> 
                //draw
                case GamesState.draw:
                    return<div className='game-over'>
                      draw
                    </div> 
                    default:
             return <></>
     
 }
}

export default GameOver;
