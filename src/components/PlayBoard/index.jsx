import React from 'react';
import './style.css';
import { Player } from '../Player';
import GameBoard from '../GameBoard';
// import IconButton from '../IconButton/container';
//import { symbol } from 'prop-types';

export const PlayBoard = ({ players }) => {
  return (
    <div className='play-board'>
      <Player
        title={'Player1'}
        name={players[0].name}
        playerIcon={players[0].playerIcon}
        active={players[0].active}
      />
      <GameBoard />
      <Player
        title={'Player2'}
        name={players[1].name}
        playerIcon={players[1].playerIcon}
        active={players[1].active}
      />
    </div>
  );
};
