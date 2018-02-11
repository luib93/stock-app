import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import configureStore from './configureStore';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(reducers);

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
