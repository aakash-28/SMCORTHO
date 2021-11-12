import React, {useState} from 'react';

import { Button, Card, Checkbox } from 'antd';

import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';


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
      title: 'Communications'
    }
  ]
};



const CommunicationsPage = () => {
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
      <Card title='For Appointments:'>
        <div className='row'>
          <div className='col-md-3 col-sm-12'><h5>SMS: </h5></div>
          <div className='col-md-3 col-sm-12' style={{marginTop:"2%"}}><Checkbox disabled={disabled}/></div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-sm-12'><h5>Email: </h5></div>
          <div className='col-md-3 col-sm-12' style={{marginTop:"2%"}}><Checkbox disabled={disabled}/></div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-sm-12'><h5>Push Notifications: </h5></div>
          <div className='col-md-3 col-sm-12' style={{marginTop:"2%"}}><Checkbox disabled={disabled}/></div>
        </div>
      </Card>

      <Card title='For Anniversary:'>
        <div className='row'>
          <div className='col-md-3 col-sm-12'><h5>SMS: </h5></div>
          <div className='col-md-3 col-sm-12' style={{marginTop:"2%"}}><Checkbox disabled={disabled}/></div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-sm-12'><h5>Email: </h5></div>
          <div className='col-md-3 col-sm-12' style={{marginTop:"2%"}}><Checkbox disabled={disabled}/></div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-sm-12'><h5>Push Notifications: </h5></div>
          <div className='col-md-3 col-sm-12' style={{marginTop:"2%"}}><Checkbox disabled={disabled}/></div>
        </div>
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

export default CommunicationsPage;