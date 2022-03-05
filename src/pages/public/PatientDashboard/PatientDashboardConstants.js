import React from 'react';

export const EMPTY_FORM = {
    patientID:"",
    name:"",
    email:"",
    start:"",
    end:"",
    notes:"",
    moment:""
}

export const RULES = {
    required: { required: true, message: <></> },
    email: { type: 'email', message: <></> }
};

export const EMAIL_RULES = [
    { ...RULES.required, message: 'Email is required' }, 
    { ...RULES.email, message: 'Enter valid email' }
]

export const PAGE_DATA = {
    title: '',
    fulFilled: true,
    breadcrumbs: [
      {
        title: 'Home',
        route: '/patient/patientdashboard'
      }
    ]
};