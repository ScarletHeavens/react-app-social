const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let defaultState = { 
    users:[],
    pageSize: 15,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true,
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
    default: return state; 
    }
};

    export const follow = (id) => ({type: FOLLOW, id});
    export const unfollow = (id) => ({type: UNFOLLOW, id});
    export const setUsers = (users) => ({ type: SET_USERS, users});
    export const setCurrentPage = ( currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
    export const setTotalUsersCount = (count) => ({type:SET_TOTAL_USERS_COUNT, count});
    export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

    export default userPageReducer;