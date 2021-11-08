import React from 'react';
import { Button, Card, Form, Input, Select } from 'antd';

import { useFormik } from 'formik';

import { IPageData } from '../../interfaces/page';

import { usePageData } from '../../hooks/usePage';
import { useGetPatient } from '../../hooks/useGetPatient';
import ActivityLogTable from './ActivityLogTable';

const pageData: IPageData = {
  title: 'Staff profile page',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'SMC',
      route: 'default-dashboard'
    },
    {
      title: 'Staff profile'
    }
  ]
};

const FormItem = Form.Item;
const Option = Select.Option;

const ProfileForm = ({ patient }) => {
  const { values } = useFormik({
    initialValues: { ...patient },
    onSubmit: () => null
  });

  return (
    <Form layout='vertical'>
      <FormItem label='Full name'>
        <Input defaultValue={values.fullName} placeholder='Full name' />
      </FormItem>

      <FormItem label='Id'>
        <Input defaultValue={values.id} placeholder='Id' />
      </FormItem>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <FormItem label='Age'>
            <Input defaultValue={values.age} placeholder='Age' />
          </FormItem>
        </div>
        <div className='col-md-6 col-sm-12'>
          <FormItem label='Gender'>
            <Select defaultValue={values.gender} placeholder='Gender'>
              <Option value='male'>Male</Option>
              <Option value='female'>Female</Option>
            </Select>
          </FormItem>
        </div>
      </div>

      <FormItem label='Phone'>
        <Input defaultValue={values.phone} placeholder='Phone' />
      </FormItem>

      <FormItem label='Address'>
        <Input.TextArea rows={4} defaultValue={values.address} placeholder='Address' />
      </FormItem>

    </Form>
  );
};

const SmcStaffProfilePage = () => {
  const { patient } = useGetPatient('Liam');

  usePageData(pageData);

  return (
    patient && (
      <>
        <div className='row mb-4'>
          <div className='col-md-6 col-sm-12'>
            {/* <div className='header mb-3'>
              <h6 className='mt-0 mb-3'>Photo</h6>
              <ImageLoader src={patient.profileImg as string} size={100} />
            </div> */}

            <div className='info stack'>
              <ProfileForm patient={patient} />
              <Button type='primary'>Save Changes</Button>
            </div>
          </div>
        </div>

        <Card title='Activity Log' className='mb-0'>
          <ActivityLogTable />
        </Card>
      </>
    )
  );
};

export default SmcStaffProfilePage;
