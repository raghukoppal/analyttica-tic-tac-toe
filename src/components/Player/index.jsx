import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Player = ({
  title,
  name,
  playerIcon,
  active = false,
  winStatus = false,
  drawStatus = false,
  winCount,
}) => {
  return (
    <div className='player-block'>
      {active ? <div className='current-turn'>Your Turn</div> : null}
      {winStatus ? <div className='status winner'>Winner</div> : null}
      {drawStatus ? <div className='status'>Draw</div> : null}
      <div className='player'>
        <div className='title'>{title}</div>
        <div className='name'>{name}</div>
        <div className='player-icon'>{playerIcon}</div>
      </div>

      <div className='win-count'>
        <span className={`dot ${winCount - 0 > 0 ? 'highlight' : ''}`}></span>
        <span className={`dot ${winCount - 1 > 0 ? 'highlight' : ''}`}></span>
        <span className={`dot ${winCount - 2 > 0 ? 'highlight' : ''}`}></span>
        <span className={`dot ${winCount - 3 > 0 ? 'highlight' : ''}`}></span>
        <span className={`dot ${winCount - 4 > 0 ? 'highlight' : ''}`}></span>
        <span className={`dot ${winCount - 5 > 0 ? 'highlight' : ''}`}></span>
      </div>
    </div>
  );
};

Player.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playerIcon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  winStatus: PropTypes.bool.isRequired,
  drawStatus: PropTypes.bool.isRequired,
  winCount: PropTypes.number.isRequired,
};
