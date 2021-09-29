import {userAPI} from '../DAL/API';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let defaultState = {
        posts : [{id:1, message:"I love trans fats", likeCount:'2'},{id:2, message:"Misery was inspired by my first girlfriend",likeCount: '18'},{ id:3 ,message:"Happy FriYay!", likeCount: "0"}, {id:4,message: "Chupakabra (.)(.)", likeCount: "666"}],
        newPostChange : "Say something",
        profile: null,
};

const profilePageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
        let nPost = {
          id: 5,
          message: state.newPostChange,
          likeCount: 9
        };
        return {
          ...state,
          posts: [...state.posts, nPost],
          newPostChange: '',      
        };
        case UPDATE_NEW_POST_TEXT:
        return {
          ...state,
          newPostChange: action.newText,
        }
        case SET_USER_PROFILE:
          return {
            ...state,
            profile: action.id,
          }
        default: return state;
}};



export const getUserProfile = (id) => (dispatch) => {
  userAPI.getProfile(id)
        .then(response => {
           dispatch(setUserProfile(response.data));
             });
}

export const addPostActionCreator = () => ({type: ADD_POST});
const setUserProfile = (id) => ({type: SET_USER_PROFILE, id});
export const updNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });

export default profilePageReducer;