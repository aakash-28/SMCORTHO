import {
  SET_PAGE_DATA,
  UPDATE_PAGE_DATA,
  RESET_PAGE_DATA
} from './types';

export const setPageData = (data) => ({
  type: SET_PAGE_DATA,
  payload: data
});

export const updatePageDada = (data) => ({
  type: UPDATE_PAGE_DATA,
  payload: data
});

export const resetPageData = () => ({
  type: RESET_PAGE_DATA
});
