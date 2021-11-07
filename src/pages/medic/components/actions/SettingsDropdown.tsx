import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const accountItems = [
  { text: 'Home', icon: 'icofont-ui-home', route: '/patient/patientdashboard' },
  { text: 'User profile', icon: 'icofont-ui-user', route: '/patient/profile' },
  { text: 'Appointments', icon: 'icofont-ui-calendar', route: '/patient/appointmenthistory' },
  { text: 'Log Out', icon: 'icofont-logout', route: '/public/sign-in' }
];

const SettingsDropdown = () => {
  const accountMenu = (
    <Menu style={{ minWidth: '180px' }}>
      {accountItems.map((item, index) => (
        <Menu.Item className='action-item' key={index}>
          <NavLink className='d-flex w-100' to={item.route} replace>
            <span className={`icon mr-3 ${item.icon}`} />
            <span className='text'>{item.text}</span>
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={accountMenu} trigger={['click']} placement='bottomRight'>
      <div className='item'>
        <Avatar
          size={40}
          className='mr-1'
          src={`${window.location.origin}/content/drarvind.png`}
        />
        <span className='icofont-simple-down' />
      </div>
    </Dropdown>
  );
};

export default SettingsDropdown;
