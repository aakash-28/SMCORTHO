import React from 'react';
import { Table, Tag } from 'antd';
import { history } from '../../../redux/store';

import staffs from './staffs';
import { usePageData } from '../../../hooks/usePage';
import { IPageData } from '../../../interfaces/page';
 

const handleShowInfo = () => history.push('/vertical/smc-staff-profile');
  
const pagination = staffs.length <= 10 ? false : {};

const columns: any = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
    sorter: (a, b) => (a.name > b.name ? 1 : -1),
    render: (name) => <strong onClick={handleShowInfo} style={{cursor:'pointer'}}>{name}</strong>
  },
  {
    key: 'number',
    dataIndex: 'number',
    title: 'Number',
    render: (phone) => (
      <span className='d-flex align-baseline nowrap' style={{ color: '#336cfb' }}>
        <span className='icofont icofont-ui-cell-phone mr-1' style={{ fontSize: 16 }} />
        {phone}
      </span>
    )
  },
  {
    key: 'id',
    dataIndex: 'id',
    title: 'ID',
    sorter: (a, b) => (a.id > b.id ? 1 : -1),
    render: (id) => (
      <span className='nowrap' style={{ color: '#a5a5a5' }}>
        {id}
      </span>
    )
  },
  {
    key: 'address',
    dataIndex: 'address',
    title: 'Address',
    render: (address) => <span style={{ minWidth: 200, display: 'block' }}>{address}</span>
  },
  {
    key: 'roles',
    dataIndex: 'roles',
    title: 'Roles',
    render: (roles) => <Tag>{roles}</Tag>,
    filters: [
      {
        text: 'ABC',
        value: 'ABC'
      },
      {
        text: 'DEF',
        value: 'DEF'
      },
      {
        text: 'GHI',
        value: 'GHI'
      },
      {
        text: 'MNO',
        value: 'MNO'
      },
      {
        text: 'PQR',
        value: 'PQR'
      },
      {
        text: 'XYZ',
        value: 'XYZ'
      }
    ],
    filterMultiple: true,
    onFilter: (value, record) => record.roles.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend', 'ascend']
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
    },
    {
      title: 'Staff'
    }
  ]
};

const StaffPage = () => {

  usePageData(pageData);

  return <Table pagination={pagination} rowKey='id' columns={columns} dataSource={staffs} />;
};

export default StaffPage;
