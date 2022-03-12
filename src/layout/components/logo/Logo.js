import React from 'react';

import './Logo.scss';

const Logo = ({ alt = '', height = 'auto', width = 'auto', src, style = {} }) => {
  return (
    <div className='logo' style={style}>
      <img src={src} alt={alt} width={width} height={height} className='logo-img' />
    </div>
  );
};

export default Logo;
