import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Root from './components/root'
import configureStore from "./store/store.js"



let store = configureStore();
window.store = store;

ReactDOM.render(
    <Root store={store} />,
  document.getElementById('root')
);






