import c from './../Dialogs.module.css';
import {NavLink} from "react-router-dom"; 


const Name = (props) => {
    let path = "/messages/" + props.id; 
   
    return (
        <div className = {c.name}>
        <NavLink to = {path}> {props.name} </NavLink> 
         </div>
    );
};

export default Name;