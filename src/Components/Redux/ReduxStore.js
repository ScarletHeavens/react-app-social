import {combineReducers, createStore} from 'redux';
import messagePageReducer from './MessagePageReducer';
import profilePageReducer from './ProfilePageReducer';
import userPageReducer from './UserPageReducers';
import authReducer from './AuthReducer';

let reducers = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
    userPage: userPageReducer,
    auth: authReducer,

});

let store = createStore(reducers);


export default store;