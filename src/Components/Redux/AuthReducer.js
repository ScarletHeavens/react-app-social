import {authAPI} from '../DAL/API';
const SET_USER_DATA = 'SET-USER-DATA'

let defaultState =  {
      email: null,
      id: null,
      login: null,
      isAuth: false,
      
};

const authReducer = (state = defaultState, action) => {
  
    switch (action.type) {
       case SET_USER_DATA:
           return {
               ...state,
               ...action.data,
               isAuth: true,
           };
        default: return state;
        }
}

export const setUserData = (email, id, login) => ({type: SET_USER_DATA, data: { email, id, login}});

// export const getUserData = () => (dispatch) => {
//     authAPI.me().then(data => {
//         if (data.resultCode === 0) {
//         let {id, email, login} = data.data;
//          dispatch(setUserData(id, email, login));
//         }
//           });
// }

export default authReducer;