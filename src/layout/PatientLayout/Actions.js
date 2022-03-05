import React from 'react';
import { Account } from '../../account/Account';

import './Actions.scss';

import Notifications from './Notifications';
import SettingsDropdown from './SettingsDropdown';

const Actions = () => (
  <div className='actions'>
    <Notifications />
    <Account>
    <SettingsDropdown />
    </Account>
  </div>
);

export default Actions;
