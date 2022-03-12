import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../redux/patients/actions';

export function usePatients() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);

  const editPatient = (patient) => {
    return dispatch(actions.editPatient(patient));
  };

  const addPatient = (patient) => {
    return dispatch(actions.addPatient(patient));
  };

  const deletePatient = (id) => {
    return dispatch(actions.deletePatient(id));
  };

  return { patients, addPatient, editPatient, deletePatient };
}
