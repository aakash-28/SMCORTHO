import { useEffect, useState } from 'react';
import axios from 'axios';

async function getPatients() {
  const result = await axios.get('./data/patients.json');
  return result.data;
}

export function useGetPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients().then((data) => {
      setPatients(data);
    });
  }, []);

  return patients;
}

export function useGetPatient(name) {
  const [patient, setPatient] = useState(null);
  const patients = useGetPatients();

  useEffect(() => {
    if (patients.length === 0) return;
    const newPatient = patients.find((doc) => doc.name === name);

    if (newPatient === undefined) return;

    setPatient(newPatient);
  }, [name, patients]);

  return { patient };
}
