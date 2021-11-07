import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { NavLink } from 'react-router-dom';

import BaseLayout from '../base/BaseLayout';

import Navbar from '../components/navbar/Navbar';

import Menu from '../components/menu/Menu';
import Search from '../components/search/Search';
import NavLoader from '../components/navbar/NavLoader';
import AddPatient from '../components/patients/AddPatient';

import Actions from '../../pages/medic/components/actions/Actions';
import { toggleSidebar } from '../../redux/settings/actions';

import { useSearchData } from '../../hooks/useSearchData';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '../../interfaces/app-state';

import './PatientLayout.scss';

type Props = {
  children: any;
};

const PatientLayout = ({ children }: Props) => {
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

      <Search layout='vertical' data={searchData} />

      <Actions />

      <NavLoader loaded={pageData.loaded} type={'top-bar'} />
    </Navbar>
  );
  return (
    <>
      <BaseLayout orientation='vertical' nav={nav}>
        {children}
      </BaseLayout>
    </>
  );
};

export default PatientLayout;
