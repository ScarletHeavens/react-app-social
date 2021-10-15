import profilePageReducer, { addPostActionCreator, deletePostActionCreator } from "./ProfilePageReducer";

let state = {
  posts : [{id:1, message:"I love trans fats", likeCount:'2'},{id:2, message:"Misery was inspired by my first girlfriend",likeCount: '18'},{ id:3 ,message:"Happy FriYay!", likeCount: "0"}, {id:4,message: "Chupakabra (.)(.)", likeCount: "666"}]};

//unit testing. The function is taken from the unit test syntax
it ('increments the posts array length', () => {
//test data
//action
  let newState = profilePageReducer(state,addPostActionCreator('newPost'));

//expectation
expect(newState.posts.length).toBe(5)

})

it ('checks the message', () => {
  //test data
   //action
    let newState = profilePageReducer(state,addPostActionCreator('newPost'));
  
  //expectation
 
  expect(newState.posts[4].message).toBe('newPost')
  })

  it ('after delete the array will decrement', () => {
    //test data
     //action
      let newState = profilePageReducer(state,deletePostActionCreator(2));
    
    //expectation
   
    expect(newState.posts.length).toBe(3)
    })