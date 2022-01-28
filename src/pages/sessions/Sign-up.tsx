import React, {useState} from 'react';

import { Button, Form, Input, Switch } from 'antd';
import PublicLayout from '../../layout/public/Public';
import { Link } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { navigateHome } from '../../utils/naviagate-home';
import EventsTimelinePage from '../services/events-timeline/EventsTimeline';
import UserPool from '../../UserPool';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

const { Item } = Form;

const SignUp = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const onSubmit = (event)=>{
    event.preventDefault();
    const attributeList=[];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name",Value:name}))
    UserPool.signUp(email,password,attributeList,null,(err,data)=>{
      if(err){
        console.error(err);
      }
      console.log(data);
    });
  };

  const [form] = useForm();

  // const signUp = () => {
  //   form
  //     .validateFields()
  //     .then(() => navigateHome())
  //     .catch(() => null);
  // };

  return (
    <PublicLayout bgImg={`${window.origin}/content/register-page.jpg`}>
      <h4 className='mt-0 mb-1'>Sign up</h4>
      <p className='text-color-200'>Create your Account</p>

      <Form  form={form} layout='vertical' className='mb-5'>
        <Item name='name' rules={[{ required: true, message: <></> }]}>
          <Input
          value={name}
          onChange={(event)=>setName(event.target.value)} 
          placeholder='Name' />
        </Item>

        <Item
          name='email'
          rules={[
            { required: true, message: <></> },
            { type: 'email', message: <></> }
          ]}
        >
          <Input 
          value={email} 
          placeholder='Email address' 
          type='mail' 
          onChange={(event)=>setEmail(event.target.value)} />
        </Item>

        <Item name='password' rules={[{ required: true, message: <></> }]}>
          <Input value={password}
          placeholder='Password' 
          type='password' 
          onChange={(event)=>setPassword(event.target.value)} />
        </Item>

        <div className='d-flex align-items-center mb-4'>
          <Switch defaultChecked /> <span className='ml-2'>I agree to the Terms and Privacy.</span>
        </div>

        <Button
          type='primary'
          // onClick={signUp}
          onClick={onSubmit}
          icon={<span className='icofont icofont-plus mr-2' style={{ fontSize: '1.2rem' }} />}
        >
          Register
        </Button>
      </Form>

      <p>
        Have an account? <Link to='sign-in'>Sign in!</Link>
      </p>
    </PublicLayout>
  );
};

export default SignUp;
