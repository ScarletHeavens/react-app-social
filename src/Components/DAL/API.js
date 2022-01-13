import * as axios from 'axios';

const instance = axios.create({
baseURL: 'https://social-network.samuraijs.com/api/1.0/',
withCredentials: true,
headers: { "API-KEY" : "ba533873-ca25-4f6f-a9a8-b0523c106250"}
});

export const userAPI = {
  loadUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize} `)
      .then((response) => {
        return response.data;
      });
  },

  unfollow(id = 1) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },

  follow(id = 1) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },

  getProfile(id) {
    alert("old method. use profileApi.getProfile");
    return profileAPI.getProfile(id);
  },
};

export const profileAPI = {
  getProfile(id) {
    return instance.get(`profile/${id}`);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  updatePhoto(photo) {
    let formData = new FormData();
    formData.append("image", photo);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveChanges(profile) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post("/auth/login", { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete("/auth/login");
  },
};

export const securityAPI = {
  captcha() {
    return instance.get(`security/get-captcha-url`);
  },
};