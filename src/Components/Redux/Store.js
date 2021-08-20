const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


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

dispatch(p){ 
if (p.type === 'ADD-POST') {
  let nPost = {
    id: 5,
    message: this._state.profilePage.newPostChange,
    likeCount: 9
  }
  this._state.profilePage.posts.push(nPost);
  this._state.profilePage.newPostChange = '';
  this._callSubscriber(this._state);
} else if (p.type === 'UPDATE-NEW-POST-TEXT'){
  this._state.profilePage.newPostChange = p.newText;
  this._callSubscriber(this._state); 
 } else if (p.type === 'UPDATE-NEW-MESSAGE-TEXT'){
   this._state.messagePage.newMessageChange = p.newMessage;
   this._callSubscriber(this._state)}
   else if (p.type === 'ADD-MESSAGE'){
   let body = this._state.messagePage.newMessageChange;
   this._state.messagePage.newMessageChange = '';
   this._state.messagePage.messages.push({message: body, id: 4});
   this._callSubscriber(this._state);
   }
 }}
 


export const addPostActionCreator = () => ({type: ADD_POST});

export const updNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updNewMessageBodyCreator = (mtext) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: mtext });

export default store;
