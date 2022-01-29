import React, { useState, useContext,useEffect } from "react";
import { AccountContext } from "../../Account";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { Button, Card, Form, Input, Select, Timeline } from 'antd';
import { IPageData } from "../../interfaces/page";
import { usePageData } from "../../hooks/usePage";


const { Item } = Form;

const ChangeEmail = () => {
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const { getSession,authenticate } = useContext(AccountContext);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user, email }) => {
        authenticate(email, password).then(() => {
          const attributes = [
            new CognitoUserAttribute({ Name: "email", Value: newEmail }),
          ];
  
          user.updateAttributes(attributes, (err, results) => {
            if (err) {
              console.error(err);
            } else {
              console.log(results);
            }
          });
        });
      });
    };

  return (
    <div>
      <Form layout='vertical'>
      <div className='row'>
      <div className='col-md-6 col-sm-12'>
          <Item label='Update Email'>
            <Input value={newEmail} placeholder='Enter new email' onChange={(event) => setNewEmail(event.target.value) }  />
          </Item>
        </div>
        <div className='col-md-6 col-sm-12'>
          <Item label=' '>
            <Input value={password} type='password' placeholder='Enter your password' onChange={(event) => setPassword(event.target.value) } />
          </Item>
        </div>
        <div className='col-md-6 col-sm-12'>
          <Item label=' '>
          <Button type='primary' onClick={onSubmit}>Update Email</Button>
          </Item>
        </div>
      </div>
      </Form>
    </div>
  );
};

export default ChangeEmail;