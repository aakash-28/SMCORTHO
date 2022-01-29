import React, { useState, useContext,useEffect } from "react";
import { AccountContext } from "../../Account";
import { Button, Card, Form, Input, Select, Timeline } from 'antd';
import { IPageData } from "../../interfaces/page";
import { usePageData } from "../../hooks/usePage";
import ChangeEmail from "./ChangeEmail";

const pageData: IPageData = {
    title: 'Update Login Credentials',
    fulFilled: true,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'patient/patientdashboard'
      },
      {
        title: 'Update Credentials'
      }
    ]
  };

const { Item } = Form;

const UpdateCredentials = () => {
    usePageData(pageData);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { getSession } = useContext(AccountContext);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user }) => {
      user.changePassword(password, newPassword, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          console.log(result);
        }
      });
    });
  };

  return (
    <div>
        <ChangeEmail/>
      <Form layout='vertical'>
      <div className='row'>
      <div className='col-md-6 col-sm-12'>
          <Item label='Update Password'>
            <Input value={password} type='password' placeholder='Current Password' onChange={(event) => setPassword(event.target.value) }  />
          </Item>
        </div>
        <div className='col-md-6 col-sm-12'>
          <Item label=' '>
            <Input value={newPassword} type='password' placeholder='New Password' onChange={(event) => setNewPassword(event.target.value) } />
          </Item>
        </div>
        <div className='col-md-6 col-sm-12'>
          <Item label=' '>
          <Button type='primary' onClick={onSubmit}>Update Password</Button>
          </Item>
        </div>
      </div>
      </Form>
    </div>
  );
};

export default UpdateCredentials;