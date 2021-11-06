import React from 'react';
import { Table } from 'antd';

const columns: any = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Jim',
        value: 'Jim'
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green'
          },
          {
            text: 'Black',
            value: 'Black'
          }
        ]
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend', 'ascend']
  },
  {
    title: 'Time',
    dataIndex: 'time',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.time - b.time
  },
  {
    title: 'Action',
    dataIndex: 'action',
    filters: [
      {
        text: 'New invoice',
        value: 'Generated a new invoice.'
      },
      {
        text: 'Appointment',
        value: 'Created a new appointment.'
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.action.indexOf(value) === 0,
    sorter: (a, b) => a.action.length - b.action.length,
    sortDirections: ['descend', 'ascend']
  }
];

const data = [
  {
    key: '1',
    name: 'Dr. Arvind R',
    time: '0301',
    action: 'Created a new appointment.'
  },
  {
    key: '2',
    name: 'Giri (Pharmacy)',
    time: '0308',
    action: 'Generated a new invoice.'
  },
  {
    key: '3',
    name: 'Dr. Abhinav',
    time: '1609',
    address: 'Updated Password.'
  },
  {
    key: '4',
    name: 'Nurse Rajni',
    time: '1810',
    address: 'Created a new patient.'
  }
];

const ActivityLog = () => {
  return <Table pagination={false} columns={columns} dataSource={data} />;
};

export default ActivityLog;