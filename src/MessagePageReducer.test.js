import messagePageReducer, {addMessageActionCreator} from './Components/Redux/MessagePageReducer';

let state =  {
    messages : [{message: "Sand dunes", id:1}, {message: 'Carry sucks', id:2}, {message: "Whassup", id:3}],
};

it('adds message to the array', () => {
    let newState = messagePageReducer(state,addMessageActionCreator('yohoho'));
    expect(newState.messages.length).toBe(4)
})

it('checks the message added', () => {
    let newState = messagePageReducer(state,addMessageActionCreator('yohoho'));
    expect(newState.messages[3].message).toBe('yohoho')
})