import { useEffect, useState } from 'react';

import { IPatient } from '../interfaces/patient';
import axios from 'axios';

async function getPatients() {
  // const result = await axios.get('./data/patients.json');
  const result = await axios.get('https://u5vmlblbqk.execute-api.ap-south-1.amazonaws.com/beta/');

  // const [data] = useState({
  //   id: result.data.patientId,
  //   name: result.data.name,
  //   number: string,
  //   age: number,
  //   gender: string,
  //   address: string,
  //   status?: result.data.title,
  //   lastVisit?: string;
  // })
  return result.data.body as IPatient[];
}

export function useGetPatients(): IPatient[] {
  const [patients, setPatients] = useState<IPatient[]>([]);

  useEffect(() => {
    getPatients().then((data) => {
      setPatients(data);
    });
  }, []);

  return patients;
}

export function useGetPatient(name: string) {
  const [patient, setPatient] = useState<IPatient>(null);
  const patients = useGetPatients();

  useEffect(() => {
    if (patients.length === 0) return;
    const newPatient = patients.find((doc) => doc.name === name);

    if (newPatient === undefined) return;

    setPatient(newPatient);
  }, [name, patients]);

  return { patient };
}
