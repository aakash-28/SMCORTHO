import { useEffect, useState } from 'react';
import axios from 'axios';

async function getBillings() {
  const result = await axios.get('./data/patient-billings.json');
  return result.data;
}

async function getPayments() {
  const result = await axios.get('./data/payments.json');
  return result.data;
}

export function useGetBillings() {
  const [billings, setBillings] = useState([]);

  useEffect(() => {
    getBillings().then((data) => {
      setBillings(data);
    });
  }, []);

  return billings;
}

export function useGetPayments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getPayments().then((data) => {
      setPayments(data);
    });
  }, []);

  return [payments, setPayments];
}
