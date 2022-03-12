import React from 'react';
import { NavLink } from 'react-router-dom';

const SimpleItem = ({ routing, title, layout, icon }) => (
  <li className='menu-item'>
    <NavLink
      className='item-link'
      to={`/${layout}/${routing}`}
      activeClassName='active'
      replace
    >
      {icon && (
        <span
          className={`link-icon ${icon.class}`}
          style={{ backgroundColor: icon.bg, color: icon.color }}
        />
      )}
      <span className='link-text'>{title}</span>
    </NavLink>
  </li>
);

export default SimpleItem;
