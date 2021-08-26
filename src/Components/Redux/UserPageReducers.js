const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let defaultState = { 
    users:[]};

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
        return {...state, users: [...state.users,...action.users]}
    }
    default: return state; 
    }
};

    export const FollowAC = (id) => ({type: FOLLOW, id});
    export const UnFollowAC = (id) => ({type: UNFOLLOW, id});
    export const SetUsers = (users) => ({ type: SET_USERS, users});
    export default userPageReducer;