import React from 'react';
import GamesState from './GamesState';

const Reset = ({gameState, onReset}) => {
    if(gameState === GamesState.inProgress)
    {
        return;
    }
    return (
        <div>
        <button  onClick={onReset} className='reset-btn'>
            Reset 
     </button>
        </div>
    );
}

export default Reset;
