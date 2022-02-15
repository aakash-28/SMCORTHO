import React from 'react';

import { usePageData } from '../../hooks/usePage';
import { useGetPatients } from '../../hooks/useGetPatient';

import PatientsTable from './PatientsTable';

import { IPageData } from '../../interfaces/page';

const pageData: IPageData = {
  title: 'Patients',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Medicine',
      route: 'default-dashboard'
    },
    {
      title: 'Patients'
    }
  ]
};

const PatientsPage = () => {

  const patients = useGetPatients();
  usePageData(pageData);

  return (
    <>
      <PatientsTable
        patients={patients}
      />
    </>
  );
};

export default PatientsPage;
