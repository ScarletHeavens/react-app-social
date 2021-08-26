const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let defaultState =  {
    messages : [{message: "Sand dunes", id:1}, {message: 'Carry sucks', id:2}, {message: "Whassup", id:3}],
    names : [{ name: 'Ivan', id:1},{ name: 'Nelli', id:2}, { name: 'Jacub', id:3}, { name: 'Hovhannes', id:4}],
    newMessageChange: '',
};

const messagePageReducer = (state = defaultState, action) => {
  
    switch (action.type) {
       case 'UPDATE-NEW-MESSAGE-TEXT':
           return {
               ...state,
               newMessageChange: action.newMessage,}; 

        case 'ADD-MESSAGE': 
        let body = state.newMessageChange;
          return {
               ...state,
               newMessageChange : '',
               messages: [...state.messages, {message: body, id: 4}],};
        default: return state;
        }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updNewMessageBodyCreator = (mtext) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: mtext });

export default messagePageReducer;