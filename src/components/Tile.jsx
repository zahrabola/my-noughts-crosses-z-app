import React from 'react';

const Tile = ({className, value, onClick, userTurn}) => {
    let hoverClass = null;
    if (value == null && userTurn != null) {
      hoverClass = `${userTurn.toLowerCase()}-hover`;
    }
    return (
        <div className={`tile ${className} ${hoverClass}`} onClick={onClick}>
           {value}
        </div>
    );
}

export default Tile;
