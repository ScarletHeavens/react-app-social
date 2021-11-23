import UserPage from './UserPage';
import React from 'react';
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, loadUsers} from './../Redux/UserPageReducers';
import {connect} from 'react-redux';
import Preloader from '../Common/Preloader';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingProgress, getIsFetching, getPageSize, getTotalUsers, getUsers } from '../Redux/UserPageSelector';


class UserContainer extends React.Component {
            
  componentDidMount(){
    let {currentPage, pageSize} = this.props;
    this.props.loadUsers(currentPage,pageSize);
  }
  
  onPageChange = (u) => {
    let {pageSize} = this.props;
    this.props.loadUsers(u, pageSize);
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsers: getTotalUsers(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  }
};

export default compose(
connect(mapStateToProps,{
      follow,unfollow,setCurrentPage,
      toggleFollowingProgress,loadUsers,}),
withAuthRedirect
  )(UserContainer) 