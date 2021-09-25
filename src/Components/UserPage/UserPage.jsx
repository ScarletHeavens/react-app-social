import React from 'react'; 
import c from './UserPage.module.css';
import img from '/Users/nellimelik/first-react-app/src/Assets/Images/profile.png';
import {NavLink} from 'react-router-dom';
import {userAPI} from '../DAL/API';

const UserPage = (props) => {
    let pages = [];
    let count = Math.ceil(props.totalUsers/props.pageSize);
    for (let i=1; i <= count; i++) pages.push(i);

    return <div className = {c.main} > 
       
       
    <div>
      {pages.map(u => {
          return <span className = {props.currentPage === u && c.active} onClick = {() => {props.onPageChange(u)}}> {u} </span>
      })} 
      
      </div>
     {
        props.users.map(u =><div key ={u.id}>

            <span>
                <div>
                   <NavLink to ={'/home/'+ u.id}> <img src={u.photos.small == null ? img : u.photos.small}></img></NavLink> 
                    </div>
                <div> {u.follow 
                ? <button onClick = { () => {
                    userAPI.unsubscribe(u.id).then(data => {
                        if (data.resultCode == 0)  props.unfollow(u.id)
                      });}}> Unfollow</button>
                
                : <button onClick = { ()=> {
                    userAPI.subscribe(u.id, {}).then(data => {
                        if (data.resultCode == 0)  props.follow(u.id)
                         });
                   }}>Follow</button>
                
                }</div>
            </span>
     
            <span>
               <span>
                   <div>{u.name}</div>
                   <div>{u.status}</div>
               </span>
               <span>
                   <div>{'u.location.city'}</div>
                   <div>{'u.location.country'}</div>
               </span>                 
            </span>
       
</div>)}
 </div>
}

export default UserPage;