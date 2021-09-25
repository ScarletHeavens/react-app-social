import * as axios from 'axios';

const instance = axios.create({
baseURL: 'https://social-network.samuraijs.com/api/1.0/',
withCredentials: true,
headers: { "API-KEY" : "ba533873-ca25-4f6f-a9a8-b0523c106250"}
});

export const userAPI = {
  getUsers (currentPage = 1, pageSize = 10){
  return instance.get(`users?page=${currentPage}&count=${pageSize} `)
  .then(response => {return response.data});
  },
  
  unsubscribe (id = 1) {
  return instance.delete(`follow/${id}`)
  .then(response => {return response.data });
  },

  subscribe (id = 1, {}) {
  return instance.post(`follow/${id}`)
  .then(response => {return response.data});
  },

}