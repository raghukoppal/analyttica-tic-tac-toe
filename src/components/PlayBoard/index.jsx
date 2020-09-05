import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import { Player } from '../Player';
import GameBoard from '../GameBoard/container';
import { calculateWinner, isBoardFull } from '../../services/Api';

export const PlayBoard = ({
  players,
  playSquares,
  emptyPlaySquare,
  resetPlaySquare,
  updatePlayerWinCount,
}) => {
  const minimumTurns = playSquares.filter((item) => item != null).length > 4;
  const winStatus = minimumTurns ? calculateWinner(playSquares) : null;
  const drawStatus = minimumTurns ? isBoardFull(playSquares) : null;

  const history = useHistory();
  useEffect(() => {
    const winner = players.find((player) => player.winCount === 6);
    if (winner) {
      history.push('/winboard');
    }
  });

  const resetPlay = () => {
    if (winStatus) {
      updatePlayerWinCount(winStatus.winIcon === 'X' ? 0 : 1);
      emptyPlaySquare();
      setTimeout(() => resetPlaySquare(), 5);
    } else if (drawStatus) {
      emptyPlaySquare();
      setTimeout(() => resetPlaySquare(), 5);
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
        winStatus={winStatus && winStatus.winIcon === 'X'}
        drawStatus={drawStatus}
        winCount={players[0].winCount}
      />
      <GameBoard winLine={winStatus && winStatus.winLine} />
      <Player
        title={'Player2'}
        name={players[1].name}
        playerIcon={players[1].playerIcon}
        active={players[1].active}
        winStatus={winStatus && winStatus.winIcon === 'O'}
        drawStatus={drawStatus}
        winCount={players[1].winCount}
      />
    </div>
  );
};

PlayBoard.propTypes = {
  players: PropTypes.array.isRequired,
  playSquares: PropTypes.array.isRequired,
  emptyPlaySquare: PropTypes.array.isRequired,
  resetPlaySquare: PropTypes.func.isRequired,
  updatePlayerWinCount: PropTypes.func.isRequired,
};
