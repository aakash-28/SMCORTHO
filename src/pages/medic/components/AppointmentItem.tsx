import React,{ useState } from 'react';

import { Card, Timeline,Button,Modal, Input, Rate, Form } from 'antd';
import {
  ExperimentOutlined,
  MonitorOutlined,
  UserAddOutlined,
  UserOutlined
} from '@ant-design/icons/lib';
import {
  DeleteOutlined,
  PrinterOutlined,
  SearchOutlined,
  SendOutlined,
  SettingOutlined
} from '@ant-design/icons';
import EditAccountPage from '../../services/EditAccounPage';
import Axios from 'axios';


const TextArea = Input.TextArea;
const modals = {
    withCustomCloseBtn: 'withCustomCloseBtn',
    feedbackmodal: 'feedbackmodal',
    feedbackmodal2: 'feedbackmodal2'
  };
  const AppointmentItem = () => {


    const url="https://a9qrytlxc1.execute-api.ap-south-1.amazonaws.com/prod/feedback"
    const [data,setData]=useState({
      patientID:"",
      feedback:"",
      rating:5,
      appointmentID:"",
    })
    
  
  function submit(e){
    e.preventDefault()
    Axios.post(url,{
      patientID:"SMCTestFeedback",
      feedback:data.feedback,
      rating:data.rating,
      appointmentID:"testappointment"
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




  const [opened, setOpened] = useState('');

  function openModal(modalName: string) {
    return () => {
      setOpened(modalName);
    };
  }

  function isOpened(modalName: string) {
    return modalName === opened;
  }

  function closeModal() {
    setOpened(null);
  }

  function onChange(value) {
    console.log('Selected Rating: ', value);
    const newdata={...data}
    newdata["rating"]=value
    setData(newdata)
  }

  return(
  <Timeline className='ml-3 mt-4'>
          <Timeline.Item
            dot={
              <div className='timeline-head bg-color-indigo'>
                <UserOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column'>
              <span className='h5'>28 Oct 2021</span>
              <span className='text-base text-color-100'>Dr. Aravind R</span>
              <span className='item-desc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.
              </span>
              <span><Button type='link' onClick={openModal(modals.feedbackmodal2)}>Write Feedback</Button>
              <Button type='link' onClick={openModal(modals.withCustomCloseBtn)}>View Documents</Button></span>
            </div>

            <Modal
          visible={isOpened(modals.feedbackmodal2)}
          closable={false}
          title={<h3 className='m-0'>Feedback</h3>}
          onCancel={closeModal}
          footer={
            <div className='modal-footer d-flex justify-content-between'>
              <Button danger key='back' onClick={closeModal}>
                Close
              </Button>

              <Button
              onClick={(e)=>submit(e)} 
               icon={<SendOutlined />} className='bg-color-success' key='submit' type='primary'>
                Submit
              </Button>
            </div>
          }
        >
      <div className='col-md-12 col-sm-12'>
        <Card className='feedbackrating'>
          <p className='feedbackmodalques'>How would you rate your overall expeience at the clinic?
          <br></br>(5 stars: Very satisfied, 0 stars: Disappointed)</p>
          <Rate onChange={(value) => onChange(value)} allowHalf value={data.rating} defaultValue={5} />
        </Card>
        <div className='col-md-12 col-sm-12'>
        <Card className='mb-md-0 feedbackcard'>
          <Form layout='vertical'>
            <Form.Item label='Feedback'>
              <TextArea id='feedback' placeholder='Please provide us with your valuable feedback. Your feedback makes us better.' onChange={(e)=>handle(e)} value={data.feedback}  rows={3} />
            </Form.Item>
          </Form>
        </Card>
      </div>
      </div>

        </Modal>

        <Modal
          visible={isOpened(modals.withCustomCloseBtn)}
          closable={false}
          title={<h3 className='m-0'>Medical Documents</h3>}
          onCancel={closeModal}
          footer={
            <div className='modal-footer d-flex justify-content-between'>
              <Button danger key='back' onClick={closeModal}>
                Close
              </Button>

            </div>
          }
        >
          <p>
          <Card title=''>
            <div className='elem-list'>
              <Button className='text-center' block>
                Prescription
              </Button>
              <Button className='text-center' block>
                Invoice
              </Button>
              <Button className='text-center' block>
                Lab Results
              </Button>
            </div>
          </Card>
          </p>

        </Modal>
          </Timeline.Item>
          </Timeline>

  )}

  export default AppointmentItem;