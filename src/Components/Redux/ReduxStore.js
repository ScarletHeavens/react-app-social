import {applyMiddleware, combineReducers, createStore} from 'redux';
import messagePageReducer from './MessagePageReducer';
import profilePageReducer from './ProfilePageReducer';
import userPageReducer from './UserPageReducers';
import authReducer from './AuthReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
    userPage: userPageReducer,
    auth: authReducer,

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;