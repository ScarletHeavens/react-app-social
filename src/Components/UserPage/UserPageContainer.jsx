import UserPage from './UserPage';
import React from 'react';
import {follow, unfollow, setCurrentPage, toggleFollowingProgress,getUsers} from './../Redux/UserPageReducers';
import {connect} from 'react-redux';
import Preloader from '../Common/Preloader';


class UserContainer extends React.Component {
  
  componentDidMount(){
      this.props.getUsers(this.props.currentPage,this.props.pageSize);
  }
  
  onPageChange = (u) => {
    this.props.getUsers(u, this.props.pageSize);
    this.props.setCurrentPage(u);
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
     followingProgress = {this.props.followingProgress}
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
    followingProgress: state.userPage.followingProgress,
  }
};


const UserPageContainer = connect(mapStateToProps,{
  follow,unfollow,setCurrentPage,
  toggleFollowingProgress,getUsers,})
  (UserContainer);
export default UserPageContainer;
