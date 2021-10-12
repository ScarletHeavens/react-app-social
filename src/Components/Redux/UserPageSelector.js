export const getUsers = (state) => {
    return state.userPage.users;
}

export const getPageSize = (state) => {
    return state.userPage.pageSize;
}

export const getTotalUsers = (state) => {
   return state.userPage.totalUsers;
   
}

export const getCurrentPage = (state) => {
    return  state.userPage.currentPage;
}

export const getIsFetching = (state) => {
    return  state.userPage.isFetching;
}

export const getFollowingProgress = (state) => {
    return  state.userPage.followingProgress;
}
