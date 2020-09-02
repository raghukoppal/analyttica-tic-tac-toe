import React from 'react';
import './style.css';
import IconButton from '../IconButton/container';

export const GameBoard = ({ playSquares }) => {
  const renderSquare = (idx) => (
    <div className='play-square' key={idx}>
      <IconButton idx={idx} />
    </div>
  );
  return (
    <div className='board-viewport'>
      <div className='board-content'>
        <div className='play-block'>
          {playSquares.map((square, idx) => renderSquare(idx))}
        </div>
      </div>
    </div>
  );
};
