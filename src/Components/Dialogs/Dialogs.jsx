import c from './Dialogs.module.css';
import Message from './Message/Message';
import Name from './Name/Name';
import React from 'react';

const Dialogs = (props) => {
    let state = props.messagePage;
    let nameList = state.names.map(el => (< Name name = {el.name} id={el.id} key ={el.id}/>));
    let messageList = state.messages.map(el =>  <Message message = {el.message} key={el.id}/>)
    let newMessageBody = state.newMessageChange;
    
    let addMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
    let body = e.target.value; 
    props.updateNewMessageBody(body);
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
               
              <textarea value= {newMessageBody} className = {c.textArea} onChange = {onMessageChange}></textarea>
              <button className = {c.button} onClick = {addMessage}> Post </button>

</div>
    )
}
export default Dialogs;