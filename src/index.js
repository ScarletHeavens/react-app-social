import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, { subscribe } from './Components/Redux/State';
import {addPost, updateNewPostText} from './Components/Redux/State';
import {BrowserRouter} from 'react-router-dom';


let renderEntireTree = () => {
    ReactDOM.render(
    <BrowserRouter>
      <App state = {state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,
    document.getElementById('root')
  )}

renderEntireTree(state);
subscribe(renderEntireTree);