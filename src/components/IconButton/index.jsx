import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const IconButton = ({
  idx,
  players,
  makeOpponentPlayerActive,
  updatePlaySquare,
}) => {
  const [icon, setIcon] = useState(null);
  const [once, setOnce] = useState(true);
  const { id, playerIcon } = players.find((player) => player.active);

  const handleSquare = () => {
    if (once) {
      updatePlaySquare(idx, playerIcon);

      // set player icon and make sure square is once clickable
      // and make opponent player active play with
      // his/her symbol/icon
      setIcon(playerIcon);
      setOnce(false);
      makeOpponentPlayerActive(id);
    }
  };
  return (
    <div onClick={handleSquare} className='iconButton'>
      {icon}
    </div>
  );
};

IconButton.propTypes = {
  idx: PropTypes.number.isRequired,
  players: PropTypes.array.isRequired,
  makeOpponentPlayerActive: PropTypes.func.isRequired,
  updatePlaySquare: PropTypes.func.isRequired,
};
