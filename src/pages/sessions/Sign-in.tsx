import React,{useState,useContext} from 'react';
import { AccountContext } from '../../Account';
import { Button, Form, Input, Switch } from 'antd';
import { LoginOutlined } from '@ant-design/icons/lib';
import PublicLayout from '../../layout/public/Public';
import { Link } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { navigateHome } from '../../utils/naviagate-home';
import UserPool from '../../UserPool';
import {CognitoUser,AuthenticationDetails} from 'amazon-cognito-identity-js';
import { Account } from '../../Account';



const { Item } = Form;

const SignIn = () => {
  const { authenticate } = useContext(AccountContext);
  const [form] = useForm();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    authenticate(email, password)
    .then((data) => {
      console.log("Logged in!", data)
      navigateHome()
      
    })
    .catch((err) => {
      console.error("Failed to login", err);
    });
  };


  return (
    <PublicLayout bgImg={`${window.origin}/content/login-page.jpg`}>
      <h4 className='mt-0 mb-1'>Login form</h4>

      <p className='text-color-200'>Login to access your Account</p>

      <Form form={form} layout='vertical' className='mb-4'>
        <Item name='login' rules={[{ required: true, message: <></> }]}>
          <Input
          value={email}
          placeholder='Login'
          onChange={(event)=>setEmail(event.target.value)}  />
        </Item>
        <Item name='password' rules={[{ required: true, message: <></> }]}>
          <Input
          value={password}
          placeholder='Password' 
          type='password'
          onChange={(event)=>setPassword(event.target.value)}  />
        </Item>

        <div className='d-flex align-items-center mb-4'>
          <Switch defaultChecked /> <span className='ml-2'>Remember me</span>
        </div>

        <Button
          block={false}
          type='primary'
          onClick={onSubmit}
          htmlType='submit'
          icon={<LoginOutlined style={{ fontSize: '1.3rem' }} />}
        >
          Login
        </Button>
      </Form>
      <br />
      <p className='mb-1'>
        <a href='#'>Forgot password?</a>
      </p>

      <p>
        Don't have an account? <Link to='sign-up'>Sign up!</Link>
      </p>
    </PublicLayout>
    
  );
};

export default SignIn;
