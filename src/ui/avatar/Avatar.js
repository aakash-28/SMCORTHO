import React from 'react';

import Classes from './Avatar.module.scss';

const SIZE_TYPES = 'sm' | 'md' | 'lg' | 'xl';

const Avatar = ({ img, size = 'md' }) => (
  <div className={`${Classes.avatarBlock} avatar=${size} mr-5`}>
    <img src={img} alt={`${name} user photo`} />
  </div>
);

export default Avatar;
