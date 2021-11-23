import React from 'react'; 
import c from './UserPage.module.css';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

const UserPage = ({totalUsers, pageSize, currentPage, onPageChange, users, ...props}) => {
    let pages = [];
    let count = Math.ceil(totalUsers/pageSize);
    for (let i=1; i <= count; i++) pages.push(i);

    return <div className = {c.main} > 
     <Paginator totalUsers = {totalUsers} pageSize = {pageSize}
     currentPage = {currentPage} onPageChange = {onPageChange}/>
     <div>
     {
        users.map(u => <User user={u} followingProgress = {props.followingProgress} follow = {props.follow} unfollow = {props.unfollow} key = {u.id} />
        )} 
        </div>
 </div>
}

export default UserPage;