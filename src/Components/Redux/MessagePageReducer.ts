const ADD_MESSAGE = "message/ADD-MESSAGE";

type MessageType = {
  message: string
  id: number
}
type NameType = {
  name: string
  id: number
}

let defaultState = {
  messages: [
    { message: "Sand dunes", id: 1 },
    { message: "Carry sucks", id: 2 },
    { message: "Whassup", id: 3 },
  ] as Array<MessageType>,
  names: [
    { name: "Ivan", id: 1 },
    { name: "Nelli", id: 2 },
    { name: "Jacub", id: 3 },
    { name: "Hovhannes", id: 4 },
  ] as Array<NameType>,
};

export type DefaultStateType = typeof defaultState

const messagePageReducer = (state = defaultState, action: any): DefaultStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { message: body, id: 4 }],
      };
    default:
      return state;
  }
}

type AddMessageActionCreatorType = {
  type: typeof ADD_MESSAGE
  newMessageBody: string
}

export const addMessageActionCreator = (newMessageBody: string):AddMessageActionCreatorType => ({
  type: ADD_MESSAGE,
  newMessageBody,
});

export default messagePageReducer;
