import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './Components/Redux/Store.js'
import {BrowserRouter} from 'react-router-dom';


let renderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
      <App state ={state} dispatch={store.dispatch.bind(store)} store= {store}/>
    </BrowserRouter>,
    document.getElementById('root')
  )}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);