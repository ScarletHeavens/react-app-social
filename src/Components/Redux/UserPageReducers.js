const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let defaultState = { 
    users:[],
    pageSize: 15,
    totalUsers: 0,
    currentPage: 1,
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
    default: return state; 
    }
};

    export const FollowAC = (id) => ({type: FOLLOW, id});
    export const UnFollowAC = (id) => ({type: UNFOLLOW, id});
    export const SetUsersAC = (users) => ({ type: SET_USERS, users});
    export const SetCurrentPageAC = ( currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
    export const SetTotalUsersCountAC = (count) => ({type:SET_TOTAL_USERS_COUNT, count});

    export default userPageReducer;