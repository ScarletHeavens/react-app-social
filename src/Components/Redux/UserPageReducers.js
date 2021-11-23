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
  users: [],
  pageSize: 5,
  totalUsers: 0,
  currentPage:1,
  isFetching: true,
  followingProgress: [],
};

const userPageReducer = (state = defaultState, action) => {
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

export const followSuccess = (id) => ({ type: FOLLOW, id });
export const unfollowSuccess = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (count) => ({
  type: SET_TOTAL_USERS_COUNT,
  count,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, id) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  id,
});

export const loadUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await userAPI.loadUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, id));
  let data = await apiMethod(id);
  if (data.resultCode == 0) dispatch(actionCreator(id));
  dispatch(toggleFollowingProgress(false, id));
};

export const follow = (id) => {
  return async (dispatch) => {
    let apiMethod = userAPI.follow.bind(userAPI);
    let actionCreator = followSuccess;
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };
};

export const unfollow = (id) => {
  return async (dispatch) => {
    let apiMethod = userAPI.unfollow.bind(userAPI);
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };
};

export default userPageReducer;
