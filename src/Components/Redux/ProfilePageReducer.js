import {profileAPI} from '../DAL/API';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';



let defaultState = {
        posts : [{id:1, message:"I love trans fats", likeCount:'2'},{id:2, message:"Misery was inspired by my first girlfriend",likeCount: '18'},{ id:3 ,message:"Happy FriYay!", likeCount: "0"}, {id:4,message: "Chupakabra (.)(.)", likeCount: "666"}],
        profile: null,
        status: " ",
};

const profilePageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
        let nPost = {
          id: 5,
          message: action.newPostArea,
          likeCount: 9
        };
        return {
          ...state,
          posts: [...state.posts, nPost],
        };
          case SET_USER_PROFILE:
          return {
            ...state,
            profile: action.id,
          }
        case SET_STATUS:
          return {
            ...state,
            status: action.status,
          }
        case DELETE_POST:
          return{
            ...state,
            posts: state.posts.filter(p => p.id != action.id)
          }
        default: return state;
}};


export const addPostActionCreator = (newPostArea) => ({type: ADD_POST, newPostArea});
const setUserProfile = (id) => ({type: SET_USER_PROFILE, id});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, id})

//thunk
export const getUserProfile = (id) => (dispatch) => {
  profileAPI.getProfile(id)
  .then(response => {
     dispatch(setUserProfile(response.data));
       });}

export const getStatus = (id) => (dispatch) => {
  profileAPI.getStatus(id).then(response => {
    dispatch(setStatus(response.data));
  });};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
  });}


export default profilePageReducer;