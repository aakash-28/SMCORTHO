import {
  RESET_SETTINGS,
  SET_SETTINGS,
  UPDATE_SETTINGS,
  TOGGLE_SIDEBAR
} from './types';

export const setSettings = (data) => ({
  type: SET_SETTINGS,
  payload: data
});

export const updateSettings = (data) => ({
  type: UPDATE_SETTINGS,
  payload: data
});

export const resetSettings = () => ({
  type: RESET_SETTINGS
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});
