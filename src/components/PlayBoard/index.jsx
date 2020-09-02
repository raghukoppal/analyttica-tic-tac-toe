import React from 'react';
import './style.css';
import { Player } from '../Player';
import GameBoard from '../GameBoard/container';
import { calculateWinner } from '../../services/Api';

export const PlayBoard = ({
  players,
  playSquares,
  emptyPlaySquare,
  resetPlaySquare,
}) => {
  const winStatus = calculateWinner(playSquares);
  const resetPlay = () => {
    if (winStatus) {
      emptyPlaySquare();
      setTimeout(() => resetPlaySquare(), 100);
    }
  };
  return (
    <div
      className='play-board'
      onClick={
        playSquares.filter((item) => item != null).length > 4
          ? resetPlay
          : undefined
      }
    >
      <Player
        title={'Player1'}
        name={players[0].name}
        playerIcon={players[0].playerIcon}
        active={players[0].active}
        winStatus={false}
      />
      <GameBoard />
      <Player
        title={'Player2'}
        name={players[1].name}
        playerIcon={players[1].playerIcon}
        active={players[1].active}
        winStatus={false}
      />
    </div>
  );
};
