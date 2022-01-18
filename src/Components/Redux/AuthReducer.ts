import {authAPI, securityAPI} from '../DAL/API';
import {stopSubmit} from 'redux-form';
const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_CAPTCHA = 'auth/SET-CAPTCHA';

let defaultState = {
  email: null as string | null,
  id: null as number | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null,
};

export type DefaultStateType = typeof defaultState

const authReducer = (state = defaultState, action: any): DefaultStateType => {
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

type SetUserDataPayloadType = {
email: string | null
id: number | null
login: string | null
isAuth: boolean | null
captcha: string | null
}

type SetUserDataType = {
  type: typeof SET_USER_DATA
  payload: SetUserDataPayloadType
}

const setUserData = (email: string | null, id: number | null, login: string | null, isAuth: boolean, captcha: string | null) : SetUserDataType => ({type: SET_USER_DATA, payload: { email, id, login, isAuth, captcha}});

type SetCaptchaType = {
  type: typeof SET_CAPTCHA
  payload: {captchaUrl: string}
}

const setCaptcha = (captchaUrl: string) : SetCaptchaType => ({type: SET_CAPTCHA, payload: {captchaUrl}});


export const getUserData = () => async (dispatch: any) => {
  const response = await authAPI.me();
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(email, id, login, true, null));
  }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
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

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setCaptcha(''));
    dispatch(setUserData(null, null, null, false, null));
  }
};

export const getCaptcha = () => async (dispatch: any) => {
  const response = await securityAPI.captcha();
  const captcha = response.data.url;
  dispatch(setCaptcha(captcha));
  };

export default authReducer;