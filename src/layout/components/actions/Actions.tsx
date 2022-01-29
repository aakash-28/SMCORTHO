import React from 'react';

import './Actions.scss';

import Notifications from './Notifications';
import SettingsDropdown from './SettingsDropdown';
import {Account} from '../../../Account';

const Actions = () => (
  <div className='actions'>
    <Notifications />
    <Account>
    <SettingsDropdown />
    </Account>
  </div>
);

export default Actions;
