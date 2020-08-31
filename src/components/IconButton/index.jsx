import React, { useState } from 'react';
import './style.css';

export const IconButton = ({ players, makeOtherPlayerActive }) => {
  const [icon, setIcon] = useState(null);
  const [once, setOnce] = useState(true);
  const { id, playerIcon } = players.find((player) => player.active);
  const addIcon = () => {
    setIcon(playerIcon);
    setOnce(false);
    makeOtherPlayerActive(id);
  };
  return (
    <div onClick={once ? addIcon : ''} className='iconButton'>
      {icon}
    </div>
  );
};
