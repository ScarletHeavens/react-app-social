import React from 'react'; 
import c from './UserPage.module.css';
import * as axios from 'axios';
import img from '/Users/nellimelik/first-react-app/src/Assets/Images/profile.png';

class UserPage extends React.Component {
  
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `).then(response => {
        
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
         });
    }
    
    onPageChange = (u) => {
        this.props.setCurrentPage(u);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${u}&count=${this.props.pageSize} `).then(response => {
            this.props.setUsers(response.data.items);
         });
    }

    render() {
        let pages = [];
        let count = Math.ceil(this.props.totalUsers/this.props.pageSize);
        for (let i=1; i <= count; i++) pages.push(i);

       return <div className = {c.main} > 
       
        <div>
          {pages.map(u => {
              return <span className = {this.props.currentPage === u && c.active} onClick = {() => {this.onPageChange(u)}}> {u} </span>
          })} 
          
          </div>
         {
            this.props.users.map(u =><div key ={u.id}>

                <span>
                    <div><img src={u.photos.small == null ? img : u.photos.small}></img></div>
                    <div> {u.follow ? <button onClick = { ()=> {this.props.unfollow(u.id)}}>Unfollow</button>
                   :<button onClick = {()=> {this.props.follow(u.id)}}>Follow</button>}
                    </div>
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
     </div> ;
                 

  
}}


export default UserPage;