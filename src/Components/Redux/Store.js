import profilePageReducer from './ProfilePageReducer';
import messagePageReducer from './MessagePageReducer';


let store = {
_state:{
  messagePage : {
    messages : [{message: "Sand dunes", id:1}, {message: 'Carry sucks', id:2}, {message: "Whassup", id:3}],
    names : [{ name: 'Ivan', id:1},{ name: 'Nelli', id:2}, { name: 'Jacub', id:3}, { name: 'Hovhannes', id:4}],
    newMessageChange: '',
},
profilePage: {
  posts : [{id:1, message:"I love trans fats", likeCount:'2'},{id:2, message:"Misery was inspired by my first girlfriend",likeCount: '18'},{ id:3 ,message:"Happy FriYay!", likeCount: "0"}, {id:4,message: "Chupakabra (.)(.)", likeCount: "666"}],
  newPostChange : "Say something",
},
},

_callSubscriber(){
  console.log ()
  },
getState(){
  return this._state;
},
subscribe (observer){
  this._callSubscriber = observer;
},

dispatch(action){ 
this._state.messagePage = messagePageReducer(this._state.messagePage, action);
this._state.profilePage = profilePageReducer(this._state.profilePage, action);

this._callSubscriber(this._state); 
 } 
 }
 

export default store;
