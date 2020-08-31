import React from 'react';
import './style.css';

export const Player = ({ title, name, playerIcon, active = false }) => (
  <div className='player-block'>
    {active ? <div className='current-turn'>Your Turn</div> : null}
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
