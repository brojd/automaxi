import { ADD_TODO } from '../actions/main';

const initialState = {
  header: {
    logos: []
  },
  jumbotron: {},
  description: {},
  services: {},
  contact: {}
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, Object.assign({ ...action.newTodo }) ];
    default:
      return state;
  }
};

export default main;
