import c from './Dialogs.module.css';
import Message from './Message/Message';
import Name from './Name/Name';
import React from 'react';
import {Textarea} from '../Common/FormControls/FormControls'
import {Field, reduxForm} from "redux-form"
import {required, maxLen} from '../../utils/validators'


let maxLen500 = maxLen(500);


const Dialogs = (props) => {
    let state = props.messagePage;
    let nameList = state.names.map(el => (< Name name = {el.name} id={el.id} key ={el.id}/>));
    let messageList = state.messages.map(el =>  <Message message = {el.message} key={el.id}/>)

    let addNewMessage = (value) => {
       props.sendMessage(value.newMessageBody);
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
             <AddMessageFormRedux onSubmit = {addNewMessage}/>
</div>
    )
}

const AddMessageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          validate={[required, maxLen500]}
          component={Textarea}
          name="newMessageBody"
          placeholder="new message"
        />
        <button className={c.button}> Post </button>
      </form>
    </div>
  );
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessage'})(AddMessageForm)

export default Dialogs;