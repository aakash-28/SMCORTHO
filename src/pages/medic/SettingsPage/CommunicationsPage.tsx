import React, {useState} from 'react';

import { AutoComplete, Button, Card, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons/lib';

import { useFetchPageData, usePageData } from '../../../hooks/usePage';
import { IPageData } from '../../../interfaces/page';
import { IOption } from '../../../interfaces/option';

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
      title: 'Home',
      route: 'default-dashboard'
    },
    {
      title: 'UI Kit ',
      route: 'default-dashboard'
    },
    {
      title: 'Settings'
    }
  ]
};



const CommunicationsPage = () => {
  const [dataSource] = useFetchPageData<IOption[]>('./data/autocomplete.json', []);
  usePageData(pageData);

  const [inputList, setInputList] = useState([{ medicine: "", morning: "", afternoon: "", evening: "" }]);

  const handleAddClick = () => {
    setInputList([...inputList, { medicine: "", morning: "", afternoon: "", evening: "" }])
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

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Card>
            <Form layout='vertical'>
              <Form.Item label='Notes'>
                <Input.TextArea placeholder='Notes' />
              </Form.Item>
              <Form.Item label='Charting'>
                <Input.TextArea placeholder='Charting' />
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>

      <Card title='Prescription' className='mb-0'>
        <Form layout='vertical'>
        {inputList.map((x, i) => {
        return (
          <div className='row'>
          
          <div className='col-md-6 col-sm-12'>
            <Form.Item label='Medicine'>
            {/* <AutoComplete filterOption options={dataSource} defaultValue='USA' /> */}
              <AutoComplete
                // name='medicine'
                filterOption 
                options={dataSource}
                placeholder='Medicine'
                className='mb-md-0 mb-4 medicine'
                value={x.medicine}
                onChange={e => handleInputChange(e, i)}
              />
              </Form.Item>
            </div>
            <div className='col-md-1 col-sm-12'>
            <Form.Item label='Morning'>
              <Input
                name='morning'
                placeholder='0'
                className='mb-md-0 mb-4'
                value={x.morning}
                onChange={e => handleInputChange(e, i)}
              />
              </Form.Item>
            </div>
            <div className='col-md-1 col-sm-12'>
                <Form.Item label='Afternoon'>
              <Input
                name='afternoon'
                placeholder='0'
                className='mb-md-0 mb-4'
                value={x.afternoon}
                onChange={e => handleInputChange(e, i)}
              />
              </Form.Item>
            </div>
            <div className='col-md-1 col-sm-12'>
                <Form.Item label='Evening'>
              <Input
                name='evening'
                placeholder='0'
                className='mb-md-0 mb-4'
                value={x.evening}
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
            Generate PDF
            </Button>
        </div>
        <div className='col-md-6 col-sm-12'>
            <Button block type='primary' htmlType='submit'>
            Generate PDF
            </Button>
        </div>
      </div>
      </Card>


    </>
  );
};

export default CommunicationsPage;
