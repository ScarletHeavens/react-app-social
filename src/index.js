import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './Components/Redux/ReduxStore';
import {BrowserRouter} from 'react-router-dom';
import  { Provider } from './Components/Redux/StoreContext';


let renderEntireTree = () => {
    ReactDOM.render(
    <BrowserRouter>
    <Provider store = {store}>
      <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )}

renderEntireTree(store.getState());
store.subscribe(() => {
 let state = store.getState();
 renderEntireTree(state)});