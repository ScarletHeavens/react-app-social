import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom"; 

const Name = (props) => {
    let path = "/messages/" + props.id;  
    return (
        <div className = {c.name}>
        <NavLink to = {path}> {props.name} </NavLink> 
         </div>
    );
};

const Message = (props) => {
    return (
        <div className= {c.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className = {c.dialogList}>
            <Name  name ="Ivan" id="1"/>
            <Name  name ="Nelli" id="2"/>
            <Name  name ="Jacub" id="3"/>
            <Name  name ="Hovhannes" id="4"/>
            </div>

           <div className= {c.messages}>
               <Message message = 'Sup Steph'/>
               <Message message = 'Sand Dunes'/>
               <Message message = 'Your last book sucks!'/>
              </div>
              </div>
    )
}
export default Dialogs;