import { combineReducers } from 'redux';

const global = (state = {}, action) => {
  switch (action.type) {
    case '1':
      return state;
    default:
      return state;
  }
};

const reducers = combineReducers({
  global,
});

export default reducers;
