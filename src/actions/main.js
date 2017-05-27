export const TURN_ON_LOADING = 'TURN_ON_LOADING';
export const turnOnLoading = () => {
  return {
    type: TURN_ON_LOADING
  };
};

export const TURN_OFF_LOADING = 'TURN_OFF_LOADING';
export const turnOffLoading = () => {
  return {
    type: TURN_OFF_LOADING
  };
};

export const SET_MAIN_DATA = 'SET_MAIN_DATA';
export const setMainData = data => {
  return {
    type: SET_MAIN_DATA,
    payload: data
  };
};
