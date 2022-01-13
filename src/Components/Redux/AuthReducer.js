import {authAPI, securityAPI} from '../DAL/API';
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_CAPTCHA = 'auth/SET-CAPTCHA';

let defaultState = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const setUserData = (email, id, login, isAuth, captcha) => ({type: SET_USER_DATA, payload: { email, id, login, isAuth, captcha}});
const setCaptcha = (captchaUrl) => ({type: SET_CAPTCHA, payload: {captchaUrl}});


export const getUserData = () => async (dispatch) => {
  const response = await authAPI.me();
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(email, id, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptcha());
    }

    const message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setCaptcha(null));
    dispatch(setUserData(null, null, null, false));
  }
};

export const getCaptcha = () => async (dispatch) => {
  const response = await securityAPI.captcha();
  const captcha = response.data.url;
  dispatch(setCaptcha(captcha));
  };

export default authReducer;