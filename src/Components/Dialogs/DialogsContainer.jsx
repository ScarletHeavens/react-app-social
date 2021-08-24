import Dialogs from './Dialogs'
import React from 'react';
import {addMessageActionCreator, updNewMessageBodyCreator} from '../Redux/MessagePageReducer'
import StoreContext from './../Redux/StoreContext';

const DialogsContainer = () => {
 return (
<StoreContext.Consumer>
{ (store) => {
let state = store.getState().messagePage;
let addMessage = () => {
    store.dispatch(addMessageActionCreator())
}

let onMessageChange = (body) => {
    store.dispatch(updNewMessageBodyCreator(body));
}
return  <Dialogs updateNewMessageBody = {onMessageChange} 
              sendMessage = {addMessage} 
              messagePage = {state}/> 
}}
</StoreContext.Consumer>
 )
}

export default DialogsContainer;