import React, { useState } from 'react';

import { Avatar, Card, Skeleton, Switch } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import { usePageData } from '../../../hooks/usePage';
import { usePatients } from '../../../hooks/usePatients';
import { IPageData } from '../../../interfaces/page';

import ClinicPage from './ClinicPage';
import StaffPage from './StaffPage';
import CommunicationsPage from './CommunicationsPage';

const { Meta } = Card;

const tabList = [
  {
    key: 'tab1',
    tab: 'Tab1'
  },
  {
    key: 'tab2',
    tab: 'Tab2'
  }
];

const contentList = {
  tab1: <p>Content1</p>,
  tab2: <p>Content2</p>
};

const tabListNoTitle = [
  {
    key: 'clinic',
    tab: 'Clinic'
  },
  {
    key: 'staff',
    tab: 'Staff'
  },
  {
    key: 'communications',
    tab: 'Communications'
  }
];

// const { patients, editPatient, deletePatient } = usePatients();

// const contentListNoTitle = {
//   clinic: <ClinicPage/>,
//   staff: <StaffPage 
//     onDeletePatient={deletePatient}
//     onEditPatient={editPatient}
//     patients={patients}/>,
//   communications: <CommunicationsPage/>
// };

const pageData: IPageData = {
  title: 'Settings',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'UI Kit',
      route: 'default-dashboard'
    },
    {
      title: 'Components',
      route: 'default-dashboard'
    },
    {
      title: 'Settings'
    }
  ]
};

const SmcSettings = () => {
  usePageData(pageData);

  const [loading, setLoading] = useState<boolean>(true);
  const [noTitleKey, setNoTitleKey] = useState('app');
  const [key, setKey] = useState('tab1');

  const onTabChange = (setter: (val: string) => void) => (key: string) => {
    setter(key);
  };

  const { patients, editPatient, deletePatient } = usePatients();

  return (
    <>
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={noTitleKey}
        onTabChange={onTabChange(setNoTitleKey)}
      >
        {{
            clinic: <ClinicPage/>,
            staff: <StaffPage 
              onDeletePatient={deletePatient}
              onEditPatient={editPatient}
              patients={patients}/>,
            communications: <CommunicationsPage/>
          }[noTitleKey]}
      </Card>
    </>
  );
};

export default SmcSettings;
