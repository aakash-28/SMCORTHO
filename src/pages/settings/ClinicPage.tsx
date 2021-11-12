import React, {useState} from 'react';

import { Button, Card, Form, Input } from 'antd';
import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 }
  }
};

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
      title: 'Clinic'
    }
  ]
};

const ClinicPage = () => {
  
  usePageData(pageData);

  
  const [disabled, setDisabled] = useState(true);

  function handleEditClick() {
    setDisabled(false);
  }

  function handleSaveClick() {
    setDisabled(true);
  }

  return (
    <>
      <Card>
        <Form labelAlign='left' layout='horizontal' {...formItemLayout}>
          <Form.Item label='Clinic Name'>
            <Input disabled={disabled} placeholder='SMC' />
          </Form.Item>
          <Form.Item label='Clinic Address'>
            <Input disabled={disabled} placeholder='<Address>' />
          </Form.Item>
          <Form.Item label='Doctor Name'>
            <Input disabled={disabled} placeholder='Dr. Arvind Rajagopalan' />
          </Form.Item>
          <Form.Item label='Doctor Titles'>
            <Input disabled={disabled} placeholder='<Title>' />
          </Form.Item>
        </Form>
      </Card>

      <Card style={{overflow:'hidden'}}>
        <div className='row' style={{float:'right'}}>
          <div className='col-md-6 col-sm-12'>
              <Button block type='primary' htmlType='submit' onClick={handleEditClick}>
              Edit
              </Button>
          </div>
          <div className='col-md-6 col-sm-12'>
              <Button block type='primary' htmlType='submit' onClick={handleSaveClick}>
              Save
              </Button>
          </div>
        </div>
      </Card>
    </>
  );
};


export default ClinicPage;