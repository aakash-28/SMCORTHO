import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import axios from 'axios';

import { setPageData, updatePageDada } from '../redux/page-data/actions';

export function usePageData(pageData) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageData({ ...pageData, loaded: true }));
  }, [pageData, dispatch]);
}

export function useFetchPageData(url, initialState = null, callback) {
  const [data, setData] = useState<T>(initialState);
  const dispatch = useDispatch();

  async function getData() {
    const result = await axios.get(url);
    return result.data;
  }

  useEffect(() => {
    getData()
      .then((data) => {
        if (callback) {
          callback(data);
        }

        setTimeout(() => dispatch(updatePageDada({ fulFilled: true, loaded: true })), 300);

        setData(data);
      })
      .catch(console.error);
  }, [url, dispatch]);

  return [data, setData];
}
