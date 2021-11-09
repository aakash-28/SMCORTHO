import React, {useState} from 'react';

import { Button, Card, Form, Input, DatePicker, TimePicker } from 'antd';
import { Rule } from 'antd/es/form';
import {
  EditOutlined,
  FontSizeOutlined,
  InfoCircleOutlined,
  PushpinOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';
import {
  IdcardOutlined,
  LockOutlined,
  MailOutlined,
  ReloadOutlined,
  SendOutlined
} from '@ant-design/icons/lib';
import CalendarComp from './components/CalendarComp'
import './css/patient.css'

const { Item } = Form;
const { RangePicker } = DatePicker;
const rules = {
  required: { required: true, message: <></> } as Rule,
  email: { type: 'email', message: <></> } as Rule
};
const config = {
  rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
};
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




const FormWithMessages = () => {
const [secondChar, setSecondChar] = useState(0);

const handleChange = (maxCount: number, setter: (val) => void) => (event) => {
  const charLeft = maxCount - event.target.value.length;
  setter(charLeft);
};
  const [form] = Form.useForm();

  const resetForm = () => form.resetFields();

  return (
            <Form form={form} layout='vertical'>
              <Item
                label='Patient Name'
                name='First name'
                rules={[{ ...rules.required, message: 'First name is required' }]}
              >
                <Input suffix={<IdcardOutlined />} placeholder='Patient Name' />
              </Item>

              <Item
                label='Email'
                name='Email'
                rules={[
                  { ...rules.required, message: 'Email is required' },
                  { ...rules.email, message: 'Enter valid email' }
                ]}
              >
                <Input suffix={<MailOutlined />} placeholder='Email' />
              </Item>

              <Item name="date-time-picker" label="Pick Date and Time" {...config}>
                <DatePicker showTime format="YYYY-MM-DD HH:mm" />
              </Item>
              <Item name="notes-taker" label="Notes for doctor">
                      <Input
                        placeholder='Notes (Max. 300 Char)'
                        maxLength={300}
                        onChange={handleChange(300, setSecondChar)}
                        prefix={<span style={{ color: 'rgba(0,0,0,.2)' }}>{secondChar || 0}</span>}
                        suffix={<EditOutlined />}
                      />
                    </Item>

              <div className='d-flex justify-content-end'>
                <div className='elem-list'>
                  <Button onClick={resetForm} ghost danger icon={<ReloadOutlined />}>
                    Reset form
                  </Button>

                  <Button type='primary' icon={<SendOutlined />}>
                    Create Appointment
                  </Button>
              </div>
            </div>
          </Form>
  );
};

const pageData: IPageData = {
  title: '',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: '/patient/patientdashboard'
    }
  ]
};

const PatientDash = () => {
  usePageData(pageData);
  return (
    <>
    <div className='container patientdasharea'>
      <div className='row'>
        <div className='col-md-6 appointmentform'>
          <Card title='New Appointment' className='mb-0'>
            <FormWithMessages />
          </Card>
        </div>
        <div className='col-md-6 patientcalendar'>
            <CalendarComp />
        </div>
      </div>
    </div>
    </>
  );
};

export default PatientDash;
