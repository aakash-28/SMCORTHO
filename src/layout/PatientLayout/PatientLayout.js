import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BaseLayout2 from '../base2/BaseLayout2';
import Navbar from '../components/navbar/Navbar';
import NavLoader from '../components/navbar/NavLoader';
import Logo from '../components/logo/Logo';
import Actions from './Actions';
import { toggleSidebar } from '../../redux/settings/actions';
import LogoSvg from './../../assets/img/logo.png';
import { useSearchData } from '../../hooks/useSearchData';
import { useDispatch, useSelector } from 'react-redux';

import './PatientLayout.scss';

const logoStyle = {
  height: '100px',
  width: '150px',
};
const PatientLayout = ({ children }) => {
  const dispatch = useDispatch();

  const settings = useSelector((state) => state.settings);
  const pageData = useSelector((state) => state.pageData);

  const searchData = useSearchData();

  const onSidebarToggle = () => dispatch(toggleSidebar());

  const [menuData, setMenuData] = useState([]);
  
  useEffect(() => {
    // API call here
    async function fetchMenuData() {
      const result = await axios('/data/menu.json');
      setMenuData(result.data);
    }

    // fetchMenuData().catch((err) => console.log('Server Error', err));
  }, []);

  const nav = (
    <Navbar
      boxed={true}
      color='#ffffff'
      background='#ffffff'
      orientation='horizontal'
    >
      <button className='no-style navbar-toggle d-lg-none' onClick={onSidebarToggle}>
        <span />
        <span />
        <span />
      </button>

      <Logo src={LogoSvg} style={logoStyle}/>

      <Actions />

      <NavLoader loaded={pageData.loaded} type={'top-bar'} />
    </Navbar>
  );
  return (
    <>
      <BaseLayout2 orientation='vertical' nav={nav}>
        {children}
      </BaseLayout2>
    </>
  );
};

export default PatientLayout;
