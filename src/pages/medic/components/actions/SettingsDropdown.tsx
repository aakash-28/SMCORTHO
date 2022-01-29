import React,{useContext,useEffect,useState} from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { AccountContext } from '../../../../Account';

const accountItems = [
  { text: 'Home', icon: 'icofont-ui-home', route: '/patient/patientdashboard' },
  { text: 'User profile', icon: 'icofont-ui-user', route: '/patient/profile' },
  { text: 'Appointments', icon: 'icofont-ui-calendar', route: '/patient/appointmenthistory' },
  { text: 'Update Credentials', icon: 'icofont-ui-password', route: '/patient/updatecredentials' }
];
const SettingsDropdown = () => {

  const [status, setStatus] = useState(false);
  
  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

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
      <Menu.Item className='action-item'>
          <NavLink onClick={logout} className='d-flex w-100' to='/public/sign-in' replace>
            <span className={`icon mr-3 icofont-logout`} />
            <span className='text'>Log Out</span>
          </NavLink>
        </Menu.Item>
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
