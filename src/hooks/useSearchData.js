import { useEffect, useState } from 'react';
import axios from 'axios';

async function fetchSearchData() {
  const result = await axios('./data/menu.json');
  return result.data;
}

const hasRouting = (item) => !!item.routing;
const hasSub = (item) => !!item.sub;

const getOption = (item) => ({
  label: item.title,
  value: item.layout ? `/${item.layout}/${item.routing}` : item.routing
});

const setSubTitle = (itemTitle) => (subItem) => ({
  ...subItem,
  title: `${itemTitle} > ${subItem.title}`
});

function parseSearchData(data) {
  const menuItems = data.filter(hasRouting);

  const menuItemsWithSub = data
    .filter(hasSub)
    .map((item) => ({
      ...item,
      sub: item.sub.map(setSubTitle(item.title))
    }))
    .map((item) => item.sub)
    .flat();

  return [...menuItems, ...menuItemsWithSub].map(getOption);
}

export function useSearchData() {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetchSearchData()
      .then((data) => {
        const searchData = parseSearchData(data);
        setSearchData(searchData);
      })
      .catch((err) => console.log('Server Error', err));
  }, []);

  return searchData;
}
