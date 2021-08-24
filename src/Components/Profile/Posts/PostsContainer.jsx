import Posts from './Posts';
import React from 'react';
import {updNewPostActionCreator, addPostActionCreator} from '../../Redux/ProfilePageReducer'
import StoreContext from '../../Redux/StoreContext';

const PostsContainer = () => {
 return (
 <StoreContext.Consumer> 
       { (store) => { 
      let state = store.getState().profilePage;
      let addingPost = () => {
      store.dispatch(addPostActionCreator())};
      let onPostChange = (text) => {
      let action = updNewPostActionCreator(text);
      store.dispatch(action)};
      return <Posts updNewPostText= {onPostChange} addPost ={addingPost} posts = {state.posts} newPostChange = {state.newPostChange}/>}
      } 
</StoreContext.Consumer>)}

export default PostsContainer;
