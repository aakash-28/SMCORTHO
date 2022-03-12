import React from 'react';
import './Public.scss';
import Logo from '../components/logo/Logo';
import LogoSvg from '../../assets/img/logo2.png';

const PublicLayout = ({ children, bgImg, transparent = false }) => (
  <div className='public-layout' style={{ backgroundImage: `url(${bgImg})` }}>
    <div className={`content-box ${transparent ? 'transparent' : null}`}>
      <div className='content-header'>
        <Logo src={LogoSvg} />
      </div>
      <div className='content-body'>{children}</div>
    </div>
  </div>
);

export default PublicLayout;
