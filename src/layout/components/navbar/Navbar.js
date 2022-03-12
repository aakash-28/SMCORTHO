import React, {useRef } from 'react';

import classNames from '../../../utils/class-names';
import useOutsideClick from '../../../hooks/useClickOutside';
import './scss/Navbar.scss';

// Navbar wrapper
const Navbar = ({ minHeight = 60, background, orientation, children,
  className = '', opened = false, color, boxed = false, onClickOutside = () => null}) => {

  const containerRef = useRef(null);
  const handleClickOutside = () => (opened ? onClickOutside() : null);
  useOutsideClick(containerRef, handleClickOutside);

  const navClasses = classNames({boxed, opened, [className]: !!className, [orientation]: true});
  const navStyle = {background, minHeight, color};

  return (
    <div ref={containerRef} className={`navbar ${navClasses}`} style={navStyle}>
      <div className='navbar-wrap'>{children}</div>
    </div>
  );
};

export default Navbar;
