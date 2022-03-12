import { useEffect, useState } from 'react';

import axios from 'axios';

export function useFetch(url, initialState, callback) {
  const [data, setData] = useState<T>(initialState);

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

        setData(data);
      })
      .catch(console.error);
  }, [url]);

  return [data, setData];
}
