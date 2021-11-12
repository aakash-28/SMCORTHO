import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { NavLink } from 'react-router-dom';

import BaseLayout from '../../base/BaseLayout';

import Navbar from '../navbar/Navbar';

import Menu from '../menu/Menu';
import Search from '../search/Search';
import NavLoader from '../navbar/NavLoader';
import LogoPNG from '../../../assets/img/logo.png';

import Actions from '../actions/Actions';
import { toggleSidebar } from '../../../redux/settings/actions';

import { useSearchData } from '../../../hooks/useSearchData';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '../../../interfaces/app-state';

import './SMCLayout.scss';
import { SMCSideNavOptions } from './smcNavOptions';
import Logo from '../logo/Logo';

type Props = {
  children: any;
};

const SMCLayout = ({ children }: Props) => {
  const dispatch = useDispatch();

  const settings = useSelector((state: IAppState) => state.settings);
  const pageData = useSelector((state: IAppState) => state.pageData);

  const searchData = useSearchData();

  const onSidebarToggle = () => dispatch(toggleSidebar());

  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // API call here
    async function fetchMenuData() {
      const result = await axios('/data/menu.json');
      setMenuData(result.data);
    }

    setMenuData(SMCSideNavOptions)
    pageData.loaded = true
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
{/* 
      <Search layout='vertical' data={searchData} /> */}

      <Actions />

      <NavLoader loaded={pageData.loaded} type={'top-bar'} />
    </Navbar>
  );

  const sideNav = (
    <Navbar
      onClickOutside={onSidebarToggle}
      opened={settings.sidebarOpened}
      color={settings.sidebarColor}
      background={settings.sidebarBg}
      orientation='vertical'
    >

      <Logo src={LogoPNG} />

      <Menu
        onCloseSidebar={onSidebarToggle}
        opened={settings.sidebarOpened}
        orientation='smc'
        data={menuData}
      />

      <Menu className='assistant-menu' orientation='vertical'>
        <NavLink className='link' to='/smc/settings' activeClassName='active' replace>
          <span className='link-icon icofont icofont-ui-settings' />

          <span className='link-text'>Settings</span>
        </NavLink>

        <NavLink className='link' to='/vertical/default-dashboard' activeClassName='active' replace>
          <span className='link-icon icofont icofont-question-square' />
          <span className='link-text'>FAQ & Support</span>
        </NavLink>

        {}
      </Menu>

      <NavLoader loaded={pageData.loaded} type={'nav-bar'} />
    </Navbar>
  );

  return (
    <>
      <BaseLayout orientation='vertical' nav={nav} sideNav={sideNav}>
        {children}
      </BaseLayout>
    </>
  );
};

export default SMCLayout;
