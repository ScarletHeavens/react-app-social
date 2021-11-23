import {getUserData} from '../Redux/AuthReducer'
const SET_INITIALIZED = 'app/SET-INITIALIZED';

let defaultState = {
  initialized: false,
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const setInitialized = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getUserData());
  promise.then(() => {
    dispatch(setInitialized());
  });
};

export default appReducer;