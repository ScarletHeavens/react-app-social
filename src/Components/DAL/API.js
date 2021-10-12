import * as axios from 'axios';

const instance = axios.create({
baseURL: 'https://social-network.samuraijs.com/api/1.0/',
withCredentials: true,
headers: { "API-KEY" : "ba533873-ca25-4f6f-a9a8-b0523c106250"}
});

export const userAPI = {
  loadUsers (currentPage = 1, pageSize = 10){
  return instance.get(`users?page=${currentPage}&count=${pageSize} `)
  .then(response => {return response.data});
  },
  
  unfollow (id = 1) {
  return instance.delete(`follow/${id}`)
  .then(response => {return response.data });
  },

  follow (id = 1) {
  return instance.post(`follow/${id}`)
  .then(response => {return response.data});
  },

  getProfile (id) {  
  alert('old method. use profileApi.getProfile')
   return profileAPI.getProfile(id);
    }
  }

  export const profileAPI = { 
    getProfile (id) {  
      return instance.get(`profile/${id}`);
       },
    getStatus (id){ 
      return instance.get(`profile/status/${id}`);
    },
    updateStatus(status){
      return instance.put(`profile/status`, {status: status});
    }
  }

  export const authAPI = {
    me() {return instance.get(`auth/me`)
  },
   login(email, password, rememberMe = false) {
     return instance.post('/auth/login', {email, password, rememberMe});
   },
   logout() {
    return instance.delete('/auth/login');
  }
  }