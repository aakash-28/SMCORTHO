import React from 'react';
import { Table, Button } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { IPatient } from '../../interfaces/patient';

import { history } from '../../redux/store';

type Props = {
  patients: IPatient[];
};

const PatientsTable = ({
  patients
}: Props) => {
  const handleShowInfo = () => history.push('/smc/patient-profile');

  const columns: ColumnProps<IPatient>[] = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
      render: (name) => <strong onClick={handleShowInfo} style={{cursor:'pointer'}}>{name}</strong>
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
      key: 'age',
      dataIndex: 'age',
      title: 'Age',
      sorter: (a, b) => a.age - b.age,
      render: (age) => (
        <span className='nowrap' style={{ color: '#a5a5a5' }}>
          {age}
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
      key: 'visit',
      dataIndex: 'lastVisit',
      title: 'Last visit',
      render: (visit) => (
        <span className='nowrap' style={{ color: '#a5a5a5' }}>
          {visit}
        </span>
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (actions) => (
        <div className='buttons-list nowrap'>
          <Button shape='circle' onClick={handleShowInfo}>
            <span className='icofont icofont-plus' />
          </Button>
        </div>
      )
    }
  ];

  const pagination = patients.length <= 10 ? false : {};

  return (
    <>
      <Table
        pagination={pagination}
        className='accent-header'
        rowKey='id'
        dataSource={patients}
        columns={columns}
      />
    </>
  );
};

export default PatientsTable;