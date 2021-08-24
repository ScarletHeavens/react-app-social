import {combineReducers, createStore} from 'redux';
import messagePageReducer from './MessagePageReducer';
import profilePageReducer from './ProfilePageReducer';

let reducers = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
});

let store = createStore(reducers);


export default store;