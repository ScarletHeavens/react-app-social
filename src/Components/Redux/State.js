import { renderEntireTree } from "../../render";

const state = {
 messagePage : {
     messages : [{message: "Sand dunes"}, {message: 'Carry sucks'}, {message: "Whassup"}],
     names : [{ name: 'Ivan', id:1},{ name: 'Nelli', id:2}, { name: 'Jacub', id:3}, { name: 'Hovhannes', id:4}],
 },
 profilePage: {
   posts : [{id:1, message:"I love trans fats", likeCount:'2'},{id:2, message:"Misery was inspired by my first girlfriend",likeCount: '18'},{ id:3 ,message:"Happy FriYay!", likeCount: "0"}, {id:4,message: "Chupakabra (.)(.)", likeCount: "666"}],

 }
};

export const addPost = (post) => {
  let nPost = {
    id: 5,
    message: post,
    likeCount: 9
  }

  state.profilePage.posts.push(nPost);
  renderEntireTree(state);
};

export default state;






