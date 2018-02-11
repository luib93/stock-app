import { createStore } from 'redux';

/* eslint-disable no-underscore-dangle */
export default reducer => createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
