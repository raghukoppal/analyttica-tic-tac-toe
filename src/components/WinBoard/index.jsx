import React from 'react';
import './style.css';

export const WinBoard = ({ players }) => {
  const winner = players.find((player) => player.winCount === 6);
  return winner ? (
    <div className='play-board'>
      <div className='board-viewport'>
        <div className='board-content bd-pad'>
          <div className='winner-block'>
            <div className='status'>Winner!</div>
            <div className='player'>
              <div className='title'>{winner.id}</div>
              <div className='name'>{winner.name}</div>
              <div className='player-icon'>{winner.playerIcon}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
