const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-POST':
        let nPost = {
          id: 5,
          message: state.newPostChange,
          likeCount: 9
        }
        state.posts.push(nPost);
        state.newPostChange = '';
        return state;
        case 'UPDATE-NEW-POST-TEXT':
        state.newPostChange = action.newText;
        return state;
        default: return state;
}};


export const addPostActionCreator = () => ({type: ADD_POST});

export const updNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });

export default profilePageReducer;