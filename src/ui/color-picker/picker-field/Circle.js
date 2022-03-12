import React from 'react';
import className from '../../../utils/class-names';

const ColorCircle = ({color = 'transparent', onClick, contrastColor = '#ffffff'}) => {
  const handleCircleClick = () => onClick();

  const cursorClasses = className({
    cursor: true,
    black: contrastColor !== '#ffffff'
  });

  return (
    <div className='circle' onClick={handleCircleClick}>
      <div className='bg'>
        <div className='white' />
        <div className='transparent' />
        <div className='bg-color' style={{ backgroundColor: color }} />
      </div>
      <div className={cursorClasses} />
    </div>
  );
};

export default ColorCircle;
