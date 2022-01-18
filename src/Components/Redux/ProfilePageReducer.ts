import { PostType, ProfileType, PhotosType } from './../../Types/commonTypes';
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
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostArea: '',
};

export type DefaultStateType = typeof defaultState;

const profilePageReducer = (state = defaultState, action: any): DefaultStateType => {
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
        newPostArea: ''
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
        profile: {...state.profile, photos: action.photos} as ProfileType,
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

type AddPostActionCreatorType = {
  type: typeof ADD_POST
  newPostArea: string
}

export const addPostActionCreator = (newPostArea: string): AddPostActionCreatorType => ({
  type: ADD_POST,
  newPostArea,
});

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE,
  id: ProfileType
}
const setUserProfile = (id: ProfileType): SetUserProfileType => ({ type: SET_USER_PROFILE, id });

type SetStatusType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, status });

type SetPhotoType = {
  type: typeof UPDATE_PHOTO
  photos: PhotosType
}
export const setPhoto = (photos: PhotosType): SetPhotoType => ({ type: UPDATE_PHOTO, photos });

type DeletePostType = {
  type: typeof DELETE_POST
  id: number
}
export const deletePostActionCreator = (id: number): DeletePostType => ({ type: DELETE_POST, id });


const setChanges = (profile: any) => ({ type: SAVE_CHANGES, profile });

export const getUserProfile = (id: number) => async (dispatch: any) => {
  let response = await profileAPI.getProfile(id);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (id: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(id);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const updatePhoto = (photo: any) => async (dispatch: any) => {
  let response = await profileAPI.updatePhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(setPhoto(response.data.data.photos));
  }
};
export const saveChanges = (profile: ProfileType) => async (dispatch: any) => {
  try {
    let response = await profileAPI.saveChanges(profile);
    if (response.data.resultCode === 0) {
      dispatch(setChanges(profile));
    } else {
      dispatch(
        stopSubmit("profileDetails", { _error: response.data.messages[0] })
      );
    }
    //return Promise.reject(response.data.messages[0]);
  } catch (error: any) {
    alert(error.message);
  }
};

export default profilePageReducer;