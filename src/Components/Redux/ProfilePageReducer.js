import { stopSubmit } from 'redux-form';
import {profileAPI} from '../DAL/API';
const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const UPDATE_PHOTO = 'profile/UPDATE-PHOTO';
const SAVE_CHANGES = 'profile/SAVE-CHANGES';


let defaultState = {
  posts: [
    { id: 1, message: "I love trans fats", likeCount: "2" },
    {
      id: 2,
      message: "Misery was inspired by my first girlfriend",
      likeCount: "18",
    },
    { id: 3, message: "Happy FriYay!", likeCount: "0" },
    { id: 4, message: "Chupakabra (.)(.)", likeCount: "666" },
  ],
  profile: null,
  status: " ",
};

const profilePageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POST:
      let nPost = {
        id: 5,
        message: action.newPostArea,
        likeCount: 9,
      };
      return {
        ...state,
        posts: [...state.posts, nPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.id,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.id),
      };
      case UPDATE_PHOTO:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      };
    case SAVE_CHANGES:
      return {
        ...state,
        profile: {...state.profile, ...action.profile}
      }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostArea) => ({
  type: ADD_POST,
  newPostArea,
});
const setUserProfile = (id) => ({ type: SET_USER_PROFILE, id });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setPhoto = (photos) => ({ type: UPDATE_PHOTO, photos });
const setChanges = (profile) => ({ type: SAVE_CHANGES, profile})
export const deletePostActionCreator = (id) => ({ type: DELETE_POST, id });

export const getUserProfile = (id) => async (dispatch) => {
  let response = await profileAPI.getProfile(id);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (id) => async (dispatch) => {
  let response = await profileAPI.getStatus(id);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const updatePhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.updatePhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(setPhoto(response.data.data.photos));
  }
};
export const saveChanges = (profile) => async (dispatch) => {
 try{ let response = await profileAPI.saveChanges(profile);
  if (response.data.resultCode === 0) {
   dispatch(setChanges(profile))}
   else {dispatch(stopSubmit("profileDetails", { _error: response.data.messages[0] }))}
  //return Promise.reject(response.data.messages[0]);
} catch(error){
alert(error.message)
}};

export default profilePageReducer;