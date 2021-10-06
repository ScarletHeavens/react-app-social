import {applyMiddleware, combineReducers, createStore} from 'redux';
import messagePageReducer from './MessagePageReducer';
import profilePageReducer from './ProfilePageReducer';
import userPageReducer from './UserPageReducers';
import authReducer from './AuthReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './AppReducer';



let reducers = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
    userPage: userPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,

});



let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;