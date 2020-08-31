import React from 'react';
import IconButton from '../IconButton/container';

export default () => (
  <div className='board-viewport'>
    <div className='board-content'>
      <div className='play-block'>
        <div className='play-square nt-brdr nl-br'>
          <IconButton />
        </div>
        <div className='play-square nt-brdr'>
          <IconButton />
        </div>
        <div className='play-square nt-brdr nr-brdr'>
          <IconButton />
        </div>
        <div className='play-square nl-br'>
          <IconButton />
        </div>
        <div className='play-square'>
          <IconButton />
        </div>
        <div className='play-square nr-brdr'>
          <IconButton />
        </div>
        <div className='play-square nb-brdr nl-br'>
          <IconButton />
        </div>
        <div className='play-square nb-brdr'>
          <IconButton />
        </div>
        <div className='play-square nb-brdr nr-brdr'>
          <IconButton />
        </div>
      </div>
    </div>
  </div>
);
