import React from 'react';
import { Table, Badge, Menu, Dropdown } from 'antd';
import { IPageData } from '../../interfaces/page';
import { DownOutlined } from '@ant-design/icons/lib';
import { usePageData } from '../../hooks/usePage';

const pageData: IPageData = {
    title: 'Feedbacks',
    fulFilled: true,
    breadcrumbs: [
      {
        title: 'Apps',
        route: 'default-dashboard'
      },
      {
        title: 'Services',
        route: 'default-dashboard'
      },
      {
        title: 'Feedback'
      }
    ]
  };


const menu = (
  <Menu>
    <Menu.Item>Contact Patient</Menu.Item>
    <Menu.Item>Escalate</Menu.Item>
  </Menu>
);

const FeedbackPage = () => {
    usePageData(pageData);
  const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Feedback', dataIndex: 'name', key: 'name' },

      { title: 'Doctor', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <span className='table-operation'>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()} href='#'>
                More <DownOutlined />
              </a>
            </Dropdown>
          </span>
        )
      }
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production Feedback',
        upgradeNum: 'Dr. Test'
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    { title: 'Patient Name', dataIndex: 'name', key: 'name' },
    { title: 'Feedbacks', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Action',
      key: 'operation',
      render: () => (
        <a onClick={(e) => e.preventDefault()} href='#'>
          Publish
        </a>
      )
    }
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Test Bajpai',
      upgradeNum: 3,
      createdAt: '2014-12-24 23:12:00'
    });
  }

  return (
    <Table
      pagination={false}
      className='components-table-demo-nested'
      columns={columns}
      expandedRowRender={expandedRowRender}
      dataSource={data}
    />
  );
};

export default FeedbackPage;