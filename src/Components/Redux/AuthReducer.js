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

const setUserData = (email, id, login) => ({type: SET_USER_DATA, data: { email, id, login}});

export const getUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
         dispatch(setUserData(email, id, login));
        }
          });
}

export default authReducer;