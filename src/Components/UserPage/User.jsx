import React from 'react'; 
import img from '/Users/nellimelik/first-react-app/src/Assets/Images/profile.png';
import {NavLink} from 'react-router-dom';

const User = ({user, follow, unfollow, followingProgress}) => {
    
    return <div key ={user.id}>
            <span>
                <div>
                   <NavLink to ={'/home/'+ user.id}> <img  alt='' src={user.photos.small == null ? img : user.photos.small}></img></NavLink> 
                    </div>
                <div> {user.follow 
                ? <button disabled = {followingProgress.some(id => id===user.id)} onClick = { () => {
                   
                   unfollow (user.id);
                    }}> Unfollow</button>
                
                : <button disabled = {followingProgress.some(id => id===user.id)} onClick = { ()=> {
                   follow(user.id);
                   }}>Follow</button>
                
                }</div>
            </span>
     
            <span>
               <span>
                   <div>{user.name}</div>
                   <div>{user.status}</div>
               </span>
               <span>
                   <div>{'user.location.city'}</div>
                   <div>{'user.location.country'}</div>
               </span>                 
            </span>
 </div>
}

export default User;