import { fetchMainData } from '../services/main.service';
import {
  turnOnLoading,
  turnOffLoading,
  setMainData,
  TURN_ON_LOADING,
  TURN_OFF_LOADING,
  SET_MAIN_DATA
} from '../actions/main';

const initialState = {
  data: {
    header: {
      logos: []
    },
    jumbotron: {
      headings: []
    },
    description: {
      heading: '',
      text: ''
    },
    services: {},
    contact: {}
  },
  isLoading: false,
  isError: false
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case TURN_ON_LOADING:
      return Object.assign({ ...state, isLoading: true });
    case TURN_OFF_LOADING:
      return Object.assign({ ...state, isLoading: false });
    case SET_MAIN_DATA:
      return Object.assign({ ...state, data: action.payload });
    default:
      return state;
  }
};

export const getMainData = () => {
  return dispatch => {
    dispatch(turnOnLoading());
    fetchMainData().then(data => {
      dispatch(turnOffLoading());
      dispatch(setMainData(data));
    });
  };
};

export default main;
