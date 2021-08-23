import c from './Dialogs.module.css';
import Message from './Message/Message';
import Name from './Name/Name';
import React from 'react';
import {addMessageActionCreator, updNewMessageBodyCreator} from '../Redux/MessagePageReducer'

const Dialogs = (props) => {
    let state = props.store.getState().messagePage;
    let nameList = state.names.map(el => (< Name name = {el.name} id={el.id}/>));
    let messageList = state.messages.map(el =>  <Message message = {el.message}/>)
    let newMessageChange = state.newMessageChange;
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
    let body = e.target.value; 
    props.store.dispatch(updNewMessageBodyCreator(body));
    }
    
    return (
       <div> <div className={c.dialogs}>
            <div className = {c.dialogList}>
            {nameList}
            </div>

           <div className= {c.messages}>
              {messageList}
              </div>
              </div>
               
              <textarea value= {newMessageChange} className = {c.textArea} onChange = {onMessageChange}></textarea>
              <button className = {c.button} onClick = {addMessage}> Post </button>

</div>
    )
}
export default Dialogs;