const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const messagePageReducer = (state, action) => {
    switch (action.type){
       case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageChange = action.newMessage;
            return state;
        case 'ADD-MESSAGE':
        let body = state.newMessageChange;
        state.newMessageChange = '';
        state.messages.push({message: body, id: 4});
        return state;
        default: return state;
        }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updNewMessageBodyCreator = (mtext) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: mtext });

export default messagePageReducer;