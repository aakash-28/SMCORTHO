import React,{ useState } from 'react';
import './AppointmentHistory.css';

import { Card, Timeline,Button,Modal, Input, Rate, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons/lib';
import { SendOutlined } from '@ant-design/icons';
import { usePageData } from '../../hooks/usePage';

const TextArea = Input.TextArea;

const modals = {
  withCustomCloseBtn: 'withCustomCloseBtn',
  feedbackmodal: 'feedbackmodal',
  feedbackmodal2: 'feedbackmodal2'
};

const pageData = {
  title: 'Your Appointments',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Home',
      route: 'default-dashboard'
    },
    {
      title: 'Patients Dashboard',
      route: 'default-dashboard'
    },
    {
      title: 'Appoitments'
    }
  ]
};

const AppointmentHistory = () => {
  usePageData(pageData);
  const [opened, setOpened] = useState('');

  function openModal(modalName) {
    return () => {
      setOpened(modalName);
    };
  }

  function isOpened(modalName) {
    return modalName === opened;
  }

  function closeModal() {
    setOpened(null);
  }

  return (
    <>
      <Card title=''>
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
              <span><Button type='link' onClick={openModal(modals.feedbackmodal)}>Write Feedback</Button>
              <Button type='link' onClick={openModal(modals.withCustomCloseBtn)}>View Documents</Button></span>
            </div>

            <Modal
          visible={isOpened(modals.feedbackmodal)}
          closable={false}
          title={<h3 className='m-0'>Feedback</h3>}
          onCancel={closeModal}
          footer={
            <div className='modal-footer d-flex justify-content-between'>
              <Button danger key='back' onClick={closeModal}>
                Close
              </Button>

              <Button icon={<SendOutlined />} className='bg-color-success' key='submit' type='primary'>
                Submit
              </Button>
            </div>
          }
        >
      <div className='col-md-12 col-sm-12'>
        <Card className='feedbackrating'>
          <p className='feedbackmodalques'>How would you rate your overall expeience at the clinic?
          <br></br>(5 stars: Very satisfied, 0 stars: Disappointed)</p>
          <Rate allowHalf defaultValue={5} />
        </Card>
        <div className='col-md-12 col-sm-12'>
        <Card className='mb-md-0 feedbackcard'>
          <Form layout='vertical'>
            <Form.Item label='Feedback'>
              <TextArea placeholder='Please provide us with your valuable feedback. Your feedback makes us better.' rows={3} />
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

          <Timeline.Item
            dot={
              <div className='timeline-head bg-color-pink'>
                <UserOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column'>
              <span className='h5'>01 Oct 2021</span>
              <span className='text-base text-color-100'>Dr. Aravind R</span>
              <span className='item-desc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
                veniam.
              </span>
              <span><Button type='link' onClick={openModal(modals.feedbackmodal2)}>View your feedback</Button>
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

              <Button icon={<SendOutlined />} className='bg-color-success' key='submit' type='primary'>
                Submit
              </Button>
            </div>
          }
        >
      <div className='col-md-12 col-sm-12'>
        <Card className='feedbackrating'>
          <p className='feedbackmodalques'>How would you rate your overall expeience at the clinic?
          <br></br>(5 stars: Very satisfied, 0 stars: Disappointed)</p>
          <Rate allowHalf defaultValue={5} />
        </Card>
        <div className='col-md-12 col-sm-12'>
        <Card className='mb-md-0 feedbackcard'>
          <Form layout='vertical'>
            <Form.Item label='Feedback'>
            <TextArea defaultValue='This is a test feedback used for testing the feedback feature of the website.' rows={3} />
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

          <Timeline.Item
            dot={
              <div className='timeline-head bg-color-yellow'>
                <UserOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column'>
              <span className='h5'>10 Jul 2021</span>
              <span className='text-base text-color-100'>Dr. Aravind R</span>
              <span className='item-desc'>Lorem ipsum dolor sit.</span>
              <span><Button type='link' onClick={openModal(modals.feedbackmodal)}>Write Feedback</Button>
              <Button type='link' onClick={openModal(modals.withCustomCloseBtn)}>View Documents</Button></span>
            </div>

            <Modal
          visible={isOpened(modals.feedbackmodal)}
          closable={false}
          title={<h3 className='m-0'>Feedback</h3>}
          onCancel={closeModal}
          footer={
            <div className='modal-footer d-flex justify-content-between'>
              <Button danger key='back' onClick={closeModal}>
                Close
              </Button>

              <Button icon={<SendOutlined />} className='bg-color-success' key='submit' type='primary'>
                Submit
              </Button>
            </div>
          }
        >
      <div className='col-md-12 col-sm-12'>
        <Card className='feedbackrating'>
          <p className='feedbackmodalques'>How would you rate your overall expeience at the clinic?
          <br></br>(5 stars: Very satisfied, 0 stars: Disappointed)</p>
          <Rate allowHalf defaultValue={5} />
        </Card>
        <div className='col-md-12 col-sm-12'>
        <Card className='mb-md-0 feedbackcard'>
          <Form layout='vertical'>
            <Form.Item label='Feedback'>
              <TextArea placeholder='Please provide us with your valuable feedback. Your feedback makes us better.' rows={3} />
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

          <Timeline.Item
            dot={
              <div className='timeline-head bg-color-orange'>
                <UserOutlined className='text-contrast-500' />
              </div>
            }
          >
            <div className='d-flex flex-column'>
              <span className='h5'>1 Jul 2021</span>
              <span className='text-base text-color-100'>Dr. Aravind R</span>
              <span className='item-desc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi
                veniam.
              </span>
              <span><Button type='link' onClick={openModal(modals.feedbackmodal)}>Write Feedback</Button>
              <Button type='link' onClick={openModal(modals.withCustomCloseBtn)}>View Documents</Button></span>
            </div>

            <Modal
          visible={isOpened(modals.feedbackmodal)}
          closable={false}
          title={<h3 className='m-0'>Feedback</h3>}
          onCancel={closeModal}
          footer={
            <div className='modal-footer d-flex justify-content-between'>
              <Button danger key='back' onClick={closeModal}>
                Close
              </Button>

              <Button icon={<SendOutlined />} className='bg-color-success' key='submit' type='primary'>
                Submit
              </Button>
            </div>
          }
        >
      <div className='col-md-12 col-sm-12'>
        <Card className='feedbackrating'>
          <p className='feedbackmodalques'>How would you rate your overall expeience at the clinic?
          <br></br>(5 stars: Very satisfied, 0 stars: Disappointed)</p>
          <Rate allowHalf defaultValue={5} />
        </Card>
        <div className='col-md-12 col-sm-12'>
        <Card className='mb-md-0 feedbackcard'>
          <Form layout='vertical'>
            <Form.Item label='Feedback'>
              <TextArea placeholder='Please provide us with your valuable feedback. Your feedback makes us better.' rows={3} />
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
                X-ray/Lab Results
              </Button>
              <Button className='text-center' block>
                Other investigations
              </Button>
            </div>
          </Card>
          </p>

        </Modal>
          </Timeline.Item>
        </Timeline>
      </Card>

      
    </>
  );
};

export default AppointmentHistory;
