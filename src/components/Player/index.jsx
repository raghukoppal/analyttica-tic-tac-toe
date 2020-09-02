import React from 'react';
import './style.css';
import { calculateWinner } from '../../services/Api';

export const Player = ({
  title,
  name,
  playerIcon,
  active = false,
  winStatus = false,
}) => {
  return (
    <div className='player-block'>
      {active ? <div className='current-turn'>Your Turn</div> : null}
      {winStatus ? <div className='status winner'>Winner</div> : null}
      <div className='player'>
        <div className='title'>{title}</div>
        <div className='name'>{name}</div>
        <div className='player-icon'>{playerIcon}</div>
      </div>

      <div className='win-count'>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>
    </div>
  );
};
