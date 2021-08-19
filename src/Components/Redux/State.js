let renderEntireTree = () => {
console.log ()
}

const state = {
 messagePage : {
     messages : [{message: "Sand dunes"}, {message: 'Carry sucks'}, {message: "Whassup"}],
     names : [{ name: 'Ivan', id:1},{ name: 'Nelli', id:2}, { name: 'Jacub', id:3}, { name: 'Hovhannes', id:4}],
 },
 profilePage: {
   posts : [{id:1, message:"I love trans fats", likeCount:'2'},{id:2, message:"Misery was inspired by my first girlfriend",likeCount: '18'},{ id:3 ,message:"Happy FriYay!", likeCount: "0"}, {id:4,message: "Chupakabra (.)(.)", likeCount: "666"}],
   newPostChange : 'Post here',
 }
};



export const addPost = () => {
  let nPost = {
    id: 5,
    message: state.profilePage.newPostChange,
    likeCount: 9
  }
  state.profilePage.posts.push(nPost);
  state.profilePage.newPostChange = '';
  renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostChange = newText;
  renderEntireTree(state); 
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export default state;






