import c from './Dialogs.module.css';
import Message from './Message/Message';
import Name from './Name/Name';
import React from 'react';


const Dialogs = (props) => {
    let nameList = props.state.names.map(el => (< Name name = {el.name} id={el.id}/>));
    let messageList = props.state.messages.map(el =>  <Message message = {el.message}/>)
    let newMessageArea = React.createRef();
    let postMessage =  () => {
        let text = newMessageArea.current.value;
        alert(text);
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
               
              <textarea ref={newMessageArea} className = {c.textArea}></textarea>
              <button className = {c.button} onClick = {postMessage}> Post </button>

</div>
    )
}
export default Dialogs;