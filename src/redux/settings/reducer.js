import {
  SET_SETTINGS,
  RESET_SETTINGS,
  UPDATE_SETTINGS,
  TOGGLE_SIDEBAR
} from './types';

import { DEFAULT_SETTINGS } from './settings';

const initialState = DEFAULT_SETTINGS;

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      return { ...action.payload };
    case UPDATE_SETTINGS:
      return { ...state, ...action.payload };
    case RESET_SETTINGS:
      return { ...initialState };
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarOpened: !state.sidebarOpened };
    default:
      return { ...state };
  }
};
