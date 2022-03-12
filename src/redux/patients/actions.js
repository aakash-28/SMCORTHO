import {
  ADD_PATIENT,
  DELETE_PATIENT,
  EDIT_PATIENT,
  SET_PATIENTS,
} from './types';

import axios from 'axios';

export const setPatients = (patients) => ({
  type: SET_PATIENTS,
  payload: patients
});

export const addPatient = (patient) => ({
  type: ADD_PATIENT,
  payload: patient
});

export const deletePatient = (id) => ({
  type: DELETE_PATIENT,
  id
});

export const editPatient = (patient) => ({
  type: EDIT_PATIENT,
  payload: patient
});

export const fetchPatients = (url) => {
  return dispatch => {
    axios
      .get(url)
      .then(res => res.data)
      .then(data => {dispatch(setPatients(data))})
      .catch(err => console.error('Server connections error'));
  };
};
