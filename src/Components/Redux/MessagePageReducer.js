const ADD_MESSAGE = 'ADD-MESSAGE';

let defaultState =  {
    messages : [{message: "Sand dunes", id:1}, {message: 'Carry sucks', id:2}, {message: "Whassup", id:3}],
    names : [{ name: 'Ivan', id:1},{ name: 'Nelli', id:2}, { name: 'Jacub', id:3}, { name: 'Hovhannes', id:4}],
};

const messagePageReducer = (state = defaultState, action) => {
  
    switch (action.type) {
        case 'ADD-MESSAGE': 
        let body = action.newMessageBody;
          return {
               ...state,
               messages: [...state.messages, {message: body, id: 4}],};
        default: return state;
        }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default messagePageReducer;