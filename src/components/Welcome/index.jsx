import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

export const Welcome = ({ addPlayer }) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { player1, player2 } = e.target;
    if (player1.value.length > 0 && player2.value.length > 0) {
      history.push('/playboard');
    }
  };
  return (
    <div className='play-board'>
      <div className='board-viewport'>
        <div className='board-content bd-pad'>
          <div className='sub-title'>
            Welcome to <span className='highlight'>TIC TAC TOE</span>
          </div>
          <form onSubmit={handleSubmit} method='post'>
            <div className='form-control'>
              <label htmlFor='player1' className='label'>
                Player 1
              </label>
              <input
                type='text'
                id='player1'
                name='player1'
                onChange={(e) => addPlayer(e.target.name, e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='player2' className='label'>
                Player 2
              </label>
              <input
                type='text'
                id='player2'
                name='player2'
                onChange={(e) => addPlayer(e.target.name, e.target.value)}
              />
            </div>
            <div className='form-control'>
              <button className='form-btn'>Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
