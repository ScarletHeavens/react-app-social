import {userAPI} from '../DAL/API';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let defaultState = { 
    users:[],
    pageSize: 15,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
}

const userPageReducer = (state = defaultState, action) => { 
    switch (action.type) {
    case FOLLOW:
        return {
            ...state, 
            users: state.users.map (u => {
              if (u.id === action.id){
                  return {...u, follow: true};
              }  return u;
           })
        } 
    case UNFOLLOW: 
    return {
        ...state, 
        users: state.users.map(u => {
           if (u.id === action.id){
               return {...u, follow: false}
           } return u;
        })
    } 
    case SET_USERS: {
        return {...state, users: [...action.users]}
    }
    case SET_CURRENT_PAGE: 
    return {
        ...state, 
        currentPage: action.currentPage,
    }
    case SET_TOTAL_USERS_COUNT: {
        return {
            ...state,
            totalUsers: action.count,
        }
    }
    case TOGGLE_IS_FETCHING: {
        return {
            ...state, 
            isFetching: action.isFetching,
        }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: 
    return {
        ...state, 
        followingProgress: action.isFetching 
        ? [...state.followingProgress, action.id] 
        : state.followingProgress.filter(id => id != action.id)
    }
    default: return state; 
    }
};

    export const followSuccess = (id) => ({type: FOLLOW, id});
    export const unfollowSuccess = (id) => ({type: UNFOLLOW, id});
    export const setUsers = (users) => ({ type: SET_USERS, users});
    export const setCurrentPage = ( currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
    export const setTotalUsersCount = (count) => ({type:SET_TOTAL_USERS_COUNT, count});
    export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
    export const toggleFollowingProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id});

//this is a thunk
    export const getUsers = (currentPage,pageSize) => {
    return (dispatch) => {
          dispatch(toggleIsFetching(true));
          userAPI.getUsers(currentPage, pageSize).then(data => {
           dispatch(toggleIsFetching(false));
           dispatch(setUsers(data.items));
           dispatch(setTotalUsersCount(data.totalCount));
             });
  }
}
    export const follow = (id) => {
        return (dispatch) => {
           dispatch(toggleFollowingProgress(true, id));
           userAPI.follow(id, {}).then(data => {
                if (data.resultCode == 0) dispatch(followSuccess(id));
           dispatch(toggleFollowingProgress(false, id));
        });
    }
}
    export const unfollow = (id) => {
        return (dispatch) => {
          dispatch(toggleFollowingProgress(true, id));
          userAPI.unfollow(id).then(data => {
                if (data.resultCode == 0)  dispatch(unfollowSuccess(id));
         dispatch(toggleFollowingProgress(false, id)); 
        })
}}

    export default userPageReducer;
