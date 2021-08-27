import UserPage from './UserPage';
import {FollowAC, UnFollowAC, SetUsersAC, SetCurrentPageAC, SetTotalUsersCountAC} from './../Redux/UserPageReducers';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
return { 
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsers: state.userPage.totalUsers,
    currentPage: state.userPage.currentPage,
  }
};

let mapDispatchToProps = (dispatch) => { 
  return { 
    follow: (id) => {dispatch (FollowAC(id))},
    unfollow: (id) => {dispatch (UnFollowAC(id))},
    setUsers: (users) => {dispatch (SetUsersAC(users))},
    setCurrentPage: (currentPage) => {dispatch (SetCurrentPageAC(currentPage))},
    setTotalUsersCount: (count) => {dispatch (SetTotalUsersCountAC(count))},
}};

const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage);
export default UserPageContainer;
