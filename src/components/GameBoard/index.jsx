import React from 'react';
import './style.css';
import IconButton from '../IconButton/container';

export const GameBoard = ({ playSquares, winLine = [] }) => {
  const renderSquare = (idx) => {
    const winMatch = winLine && winLine.includes(idx);
    return (
      <div className={`play-square ${winMatch ? 'match' : ''}`} key={idx}>
        <IconButton idx={idx} winLine={winLine} />
      </div>
    );
  };
  console.log('winLine', winLine);
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
