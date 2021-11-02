import React, {useState} from 'react';

import { Button, Card, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons/lib';

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
  title: 'Invoice',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'default-dashboard'
    },
    {
      title: 'UI Kit ',
      route: 'default-dashboard'
    },
    {
      title: 'Invoice'
    }
  ]
};



const FormInvoice = () => {
  usePageData(pageData);

  const [inputList, setInputList] = useState([{ medicine: "", quantity: "" }]);

  const handleAddClick = () => {
    setInputList([...inputList, { medicine: "", quantity: "" }])
  };

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };


  return (
    <>
      <Card>
        <Form>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <Input
                placeholder='Patient name'
                className='mb-md-0 mb-4'
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </div>
            <div className='col-md-6 col-sm-12'>
              <Input
                placeholder='Appointment ID'
                className='mb-md-0 mb-4'
                // prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </div>
          </div>
        </Form>
      </Card>

      <Card title='Prescription' className='mb-0'>
        <Form layout='vertical'>
        {inputList.map((x, i) => {
        return (
          <div className='row'>
          
          <div className='col-md-6 col-sm-12'>
            <Form.Item label='Medicine'>
              <Input
                name='medicine'
                placeholder='Medicine'
                className='mb-md-0 mb-4'
                value={x.medicine}
                onChange={e => handleInputChange(e, i)}
              />
              </Form.Item>
            </div>
            <div className='col-md-1 col-sm-12'>
            <Form.Item label='Quantity'>
              <Input
                name='quantity'
                placeholder='0'
                className='mb-md-0 mb-4'
                value={x.quantity}
                onChange={e => handleInputChange(e, i)}
              />
              </Form.Item>
            </div>
            <div className='col-md-1 col-sm-12'  style={{marginTop:'2.5%'}}>
              <Button shape='circle' block type='primary' htmlType='submit' onClick={handleRemoveClick}>
                <span className='icofont icofont-minus' />
              </Button>
            </div>
          </div>
          );
        })}
        </Form>
      </Card>
      
      <div className='row'>
        <div className='col-md-1 col-sm-12'>
              <Button shape='circle' block type='primary' htmlType='submit' onClick={handleAddClick}>
                <span className='icofont icofont-plus' />
              </Button>
        </div>
      </div>

      <Card style={{overflow:'hidden'}}>
      <div className='row' style={{float:'right'}}>
        <div className='col-md-6 col-sm-12'>
            <Button block type='primary' htmlType='submit'>
            Print
            </Button>
        </div>
        <div className='col-md-6 col-sm-12'>
            <Button block type='primary' htmlType='submit'>
            Save
            </Button>
        </div>
      </div>
      </Card>


    </>
  );
};

export default FormInvoice;
