import { useEffect, useState } from 'react';
import axios from 'axios';

async function getDoctors() {
  const result = await axios.get('./data/doctors.json');
  return result.data;
}

export function useGetDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors().then((data) => {
      setDoctors(data);
    });
  }, []);

  return doctors;
}

export function useGetDoctor(name) {
  const [doctor, setDoctor] = useState(null);
  const doctors = useGetDoctors();

  useEffect(() => {
    if (doctors.length === 0) return;

    const newDoctor = doctors.find((doc) => doc.name === name);

    if (newDoctor === undefined) return;

    setDoctor(newDoctor);
  }, [name, doctors]);

  return { doctor };
}
