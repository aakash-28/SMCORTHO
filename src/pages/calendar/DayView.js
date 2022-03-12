import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Events',
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

];

const data = [
  {
    key: '1',
    name: 'Appointment with Aakash',
    time: '12:30-01:00 PM'
  },
  {
    key: '2',
    name: 'Appointment with Rishabh',
    time: '02:30-03:00 PM'
  },
  {
    key: '3',
    name: 'Appointment with Piyush',
    time: '4:15-04:30 PM'
  },
  {
    key: '4',
    name: 'Jaskarans Knee Operation',
    time: '05:30-06:30 PM'
  }
];

const DayView = () => {
  return <Table pagination={false} columns={columns} dataSource={data} />;
};

export default DayView;