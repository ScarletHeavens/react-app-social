import UserPage from './UserPage';
import {FollowAC, UnFollowAC,SetUsers} from './../Redux/UserPageReducers';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
return { 
    users: state.userPage.users}
};

let mapDispatchToProps = (dispatch) => { 
  return { 
    follow: (id) => {dispatch (FollowAC(id))},
    unfollow: (id) => {dispatch (UnFollowAC(id))},
    setUsers: (users) => {dispatch (SetUsers(users))}
}};

const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage);
export default UserPageContainer;
