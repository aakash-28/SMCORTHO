import React, { useState } from 'react';

import { Card} from 'antd';

import { usePageData } from '../../../hooks/usePage';
import { IPageData } from '../../../interfaces/page';

import ClinicPage from './ClinicPage';
import StaffPage from './StaffPage';
import CommunicationsPage from './CommunicationsPage';

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


const pageData: IPageData = {
  title: 'Settings',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'SMC',
      route: 'default-dashboard'
    },
    {
      title: 'Settings',
      route: 'default-dashboard'
    }
  ]
};

const SmcSettings = () => {
  usePageData(pageData);

  const [noTitleKey, setNoTitleKey] = useState('clinic');
  const onTabChange = (setter: (val: string) => void) => (key: string) => {
    setter(key);
  };

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
            staff: <StaffPage/>,
            communications: <CommunicationsPage/>
          }[noTitleKey]}
      </Card>
    </>
  );
};

export default SmcSettings;
