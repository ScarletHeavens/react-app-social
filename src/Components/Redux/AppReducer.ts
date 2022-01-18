import {getUserData} from './AuthReducer'
const SET_INITIALIZED = 'app/SET-INITIALIZED';

export type DefaultStateType = {
  initialized: boolean
}

let defaultState: DefaultStateType = {
  initialized: false,
};

const appReducer = (state = defaultState, action:any): DefaultStateType => {
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

type SetInitializedType = {
  type: typeof SET_INITIALIZED
};

const setInitialized = ():SetInitializedType => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getUserData());
  promise.then(() => {
    dispatch(setInitialized());
  });
};

export default appReducer;