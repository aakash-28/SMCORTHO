import React from 'react';
import { Table } from 'antd';
 
const activityData = [
  {
    "date": "07-11-2021",
    "time": "11:05 AM",
    "activity": "Prescription Generation",
  },
  {
    "date": "08-11-2021",
    "time": "02:24 PM",
    "activity": "Created Appointment",
  },
  {
    "date": "03-11-2021",
    "time": "01:14 PM",
    "activity": "Invoice Generation",
  },
  {
    "date": "01-11-2021",
    "time": "01:10 PM",
    "activity": "Prescription Generation",
  },
  {
    "date": "05-10-2021",
    "time": "03:00 PM",
    "activity": "Invoice Generation",
  },
]

const pagination = activityData.length <= 10 ? false : {};

const columns: any = [
  {
    key: 'date',
    dataIndex: 'date',
    title: 'Date',
    sorter: (a, b) => (a.date > b.date ? 1 : -1),
    render: (date) => <strong>{date}</strong>
  },
  {
    key: 'time',
    dataIndex: 'time',
    title: 'Time',
    render: (time) => <span>{time}</span>
  },
  {
    key: 'activity',
    dataIndex: 'activity',
    title: 'Activity',
    render: (activity) => <span style={{ minWidth: 200, display: 'block' }}>{activity}</span>
  },
];

const ActivityLogTable = () => {

  return <Table pagination={pagination} rowKey='id' columns={columns} dataSource={activityData} />;
};

export default ActivityLogTable;