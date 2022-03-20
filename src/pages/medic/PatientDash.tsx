import React, {useRef, useState,useEffect,useContext} from 'react';
import Axios from 'axios';
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
import CalendarComp from './components/CalendarComp';
import { AccountContext } from '../../Account';
import { navigateLogin } from '../../utils/navigate-login';
import './css/patient.css'
import { Session } from 'inspector';

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
  const calendarRef = useRef(null);
  const url="https://eae63o4uu4.execute-api.ap-south-1.amazonaws.com/Prod/appointment"
  const [data,setData]=useState({
    patientID:"",
    name:"",
    email:"",
    start:"",
    end:"",
    notes:"",
    moment:""
  })
  

function submit(e){
  e.preventDefault()
  Axios.put(url,{
    patientID:"SMCTest2",
    name:data.name,
    email:data.email,
    start:data.start,
    end:data.end,
    notes:data.notes,
    moment:data.moment
  })
  .then(res=>{
    console.log(res.data)
  //   let calendarApi=calendarRef.current.getApi();
  //   calendarApi.addEvent({
  //   start:res.data.start,
  //   end:res.data.end,
  //   title:"Occupied",
  // });
  })
}

  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
  }
  // function onChange(date, dateString) {
  //   console.log(date, dateString);
  //   const newdata={...data}
  //   newdata["date"]=dateString
  //   setData(newdata)
  // }

  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    console.log('Time   1: ', dateString[0]);
    console.log('Time   2: ', value[0].toDate());
    const newdata={...data}
    newdata["start"]=value[0].toDate()
    newdata["end"]=value[1].toDate()
    newdata["moment"]=value
    setData(newdata)
  }
  function onOk(value) {
    console.log('onOk: ', value);
  }
  return (
            <Form form={form} layout='vertical' >
              <Item
                label='Patient Name'
                name='name'
                rules={[{ ...rules.required, message: 'First name is required' }]}
              >
                <Input id='name' onChange={(e)=>handle(e)} value={data.name} suffix={<IdcardOutlined  />} placeholder='Patient Name' />
              </Item>

              <Item
                label='Email'
                name='email'
                rules={[
                  { ...rules.required, message: 'Email is required' },
                  { ...rules.email, message: 'Enter valid email' }
                ]}
              >
                <Input id='email' onChange={(e)=>handle(e)} value={data.email} suffix={<MailOutlined />} placeholder='Email' />
              </Item>

              {/* <Item 
              name="date" 
              label="Pick Date and Time">
                <Input  type='date'
                 id='date' onChange={(e)=>handle(e)} value={data.date} />
              </Item> */}

              {/* <Item name="date-time-picker" label="Pick Date and Time" {...config}>
                 <DatePicker id='date'  onChange={(date, dateString) => onChange(date, dateString)} showTime format="YYYY-MM-DD HH:mm" />
              </Item> */}

              <Item name="date-time-picker" label="Pick Date and Time" >
                <RangePicker
                  showTime={{ format: 'HH:mm' }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={(value, dateString) => onChange(value, dateString)}
                  onOk={onOk}
                />
              </Item>
              <Item name="notes-taker" label="Notes for doctor">
                      <Input
                        placeholder='Notes (Max. 300 Char)'
                        maxLength={300}
                        id='notes'
                        onChange={(e)=>handle(e)} value={data.notes}
                        prefix={<span style={{ color: 'rgba(0,0,0,.2)' }}>{secondChar || 0}</span>}
                        suffix={<EditOutlined />}
                      />
                    </Item>

              <div className='d-flex justify-content-end'>
                <div className='elem-list'>
                  <Button onClick={resetForm} ghost danger icon={<ReloadOutlined />}>
                    Reset form
                  </Button>

                  <Button type='primary' 
                  onClick={(e)=>submit(e)} 
                  icon={<SendOutlined/>}>
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
