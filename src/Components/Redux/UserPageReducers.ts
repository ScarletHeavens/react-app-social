import { UsersType } from './../../Types/commonTypes';
import { userAPI } from "../DAL/API";
import {updObjInArray} from "../../utils/objectHelper";

const FOLLOW = "user/FOLLOW";
const UNFOLLOW = "user/UNFOLLOW";
const SET_USERS = "user/SET-USERS";
const SET_CURRENT_PAGE = "user/SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "user/SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "user/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "user/TOGGLE-IS-FOLLOWING-PROGRESS";


let defaultState = {
  users: [] as Array<UsersType>,
  pageSize: 10 as number,
  totalUsers: 0 as number,
  currentPage:1 as number,
  isFetching: true as boolean,
  followingProgress: [] as Array<number> //arr of user ids,
};

type DefaultStateType = typeof defaultState;

const userPageReducer = (state = defaultState, action: any): DefaultStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updObjInArray(state.users, action.id, "id", { follow: true }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updObjInArray(state.users, action.id, "id", { follow: false }),
      };

    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsers: action.count,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.id]
          : state.followingProgress.filter((id) => id != action.id),
      };
    default:
      return state;
  }
};
type FollowSuccesType = {
  type: typeof FOLLOW
  id: number
}
export const followSuccess = (id: number): FollowSuccesType => ({ type: FOLLOW, id });
type UnfollowSuccesType = {
  type: typeof UNFOLLOW
  id: number
}
export const unfollowSuccess = (id: number): UnfollowSuccesType => ({ type: UNFOLLOW, id });
type SetUsersType = {
  type: typeof SET_USERS
  users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersType => ({ type: SET_USERS, users });
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE,currentPage});
type SetTotalUsersType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}
export const setTotalUsersCount = (count: number): SetTotalUsersType => ({type: SET_TOTAL_USERS_COUNT,count});
type ToggleFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleFetchingType => ({type: TOGGLE_IS_FETCHING,isFetching});
type ToggleFollowingType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  id: number
}
export const toggleFollowingProgress = (isFetching: boolean, id: number): ToggleFollowingType=> ({type: TOGGLE_IS_FOLLOWING_PROGRESS,isFetching,id});

export const loadUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    let data = await userAPI.loadUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (dispatch: any, id: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleFollowingProgress(true, id));
  let data = await apiMethod(id);
  if (data.resultCode == 0) dispatch(actionCreator(id));
  dispatch(toggleFollowingProgress(false, id));
};

export const follow = (id: number) => {
  return async (dispatch: any) => {
    let apiMethod = userAPI.follow.bind(userAPI);
    let actionCreator = followSuccess;
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };
};

export const unfollow = (id: number) => {
  return async (dispatch: any) => {
    let apiMethod = userAPI.unfollow.bind(userAPI);
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };
};

export default userPageReducer;
