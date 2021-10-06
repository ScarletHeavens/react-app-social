import {authAPI} from '../DAL/API';
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET-USER-DATA';


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
               ...action.payload,
           };
        default: return state;
        }
}


const setUserData = (email, id, login, isAuth) => ({type: SET_USER_DATA, payload: { email, id, login, isAuth}});

export const getUserData = () => (dispatch) => {
    return (authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
         dispatch(setUserData(email, id, login, true));
        }
          }))
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
        dispatch(getUserData());
        } else {
            let message = response.data.messages.length > 0? response.data.messages[0] : 'some error';
            dispatch(stopSubmit ('login', { _error: message}));
        }
          });
}
export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
        dispatch (setUserData(null, null, null, false));
        }
          });
}

export default authReducer;