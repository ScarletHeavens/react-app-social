import UserPage from './UserPage';
import React from 'react';
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from './../Redux/UserPageReducers';
import {connect} from 'react-redux';
import Preloader from '../Common/Preloader';
import {userAPI} from '../DAL/API';

class UserContainer extends React.Component {
  
  componentDidMount(){
      this.props.toggleIsFetching(true);
      userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
       });
  }
  
  onPageChange = (u) => {
      this.props.setCurrentPage(u);
      this.props.toggleIsFetching(true);
      userAPI.getUsers(u, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
       });
  }

  render() {
    return <>  
    {this.props.isFetching? <Preloader/> :
     <UserPage
     totalUsers = {this.props.totalUsers}
     pageSize = {this.props.pageSize}
     currentPage = {this.props.currentPage}
     onPageChange = {this.onPageChange}
     users = {this.props.users}
     follow = {this.props.follow}
     unfollow = {this.props.unfollow}
     />}
</>
}}

let mapStateToProps = (state) => {
return { 
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsers: state.userPage.totalUsers,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
  }
};


const UserPageContainer = connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching,})(UserContainer);
export default UserPageContainer;
