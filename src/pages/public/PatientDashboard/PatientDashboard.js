import React, {useState} from 'react';
import Axios from 'axios';
import { Button, Card, Form, Input, DatePicker } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { usePageData } from '../../../hooks/usePage';
import {
  IdcardOutlined,
  MailOutlined,
  ReloadOutlined,
  SendOutlined
} from '@ant-design/icons/lib';
import CalendarComp from './CalendarComponent';
import './patient.css'
import { EMAIL_RULES, EMPTY_FORM, RULES, PAGE_DATA } from './PatientDashboardConstants';

const { Item } = Form;
const { RangePicker } = DatePicker;

const url="https://eae63o4uu4.execute-api.ap-south-1.amazonaws.com/Prod/appointment"

const FormWithMessages = () => {
    const [secondChar, setSecondChar] = useState(0);
    const [form] = Form.useForm();
    const resetForm = () => form.resetFields();
    const [data,setData]=useState(EMPTY_FORM)
  
    const submit = (e) => {
        e.preventDefault()
        Axios.post(url,{
            patientID:"SMCTest2",
            name:data.name,
            email:data.email,
            start:data.start,
            end:data.end,
            notes:data.notes,
            moment:data.moment
        }).then(res=>{
            console.log(res.data)
        })
    }

    const handle = (e) => {
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }

    const onChange = (value, dateString) => {
        const newdata={...data}
        newdata["start"] = value[0].toDate()
        newdata["end"] = value[1].toDate()
        newdata["moment"] = value
        setData(newdata)
    }

    function onOk(value) {
      console.log('onOk: ', value);
    }

    return (
        <Form form={form} layout='vertical' >
            <Item label='Patient Name' name='name' rules={[{ ...RULES.required, message: 'First name is required' }]}>
                <Input id='name' onChange={(e)=>handle(e)} value={data.name} suffix={<IdcardOutlined  />} placeholder='Patient Name' />
            </Item>

            <Item label='Email' name='email' rules={EMAIL_RULES}>
                <Input id='email' onChange={(e)=>handle(e)} value={data.email} suffix={<MailOutlined />} placeholder='Email' />
            </Item>

            <Item name="date-time-picker" label="Pick Date and Time" >
                <RangePicker showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    onChange={(value, dateString) => onChange(value, dateString)}
                    onOk={onOk}
                />
            </Item>

            <Item name="notes-taker" label="Notes for doctor">
                <Input placeholder='Notes (Max. 300 Char)'
                    maxLength={300}
                    id='notes'
                    onChange={(e)=>handle(e)} value={data.notes}
                    prefix={<span style={{ color: 'rgba(0,0,0,.2)' }}>{secondChar || 0}</span>}
                    suffix={<EditOutlined />}
                />
            </Item>

            <div className='d-flex justify-content-end'>
                <div className='elem-list'>
                    <Button onClick={resetForm} ghost danger icon={<ReloadOutlined />}> Reset form </Button>
                    <Button type='primary' onClick={(e)=>submit(e)} icon={<SendOutlined/>}> Create Appointment </Button>
                </div>
            </div>
        </Form>
  );
};

const PatientDashboard = () => {
    usePageData(PAGE_DATA);
  
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

export default PatientDashboard;
