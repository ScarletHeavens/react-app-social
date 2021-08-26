import Posts from './Posts';
import React from 'react';
import {updNewPostActionCreator, addPostActionCreator} from '../../Redux/ProfilePageReducer'
import {connect} from 'react-redux';


let mapStateToProps =(state)=>{
return {
      posts: state.profilePage.posts,
      newPostChange: state.profilePage.newPostChange
      }
}

let mapDispatchToProps = (dispatch) => {
      return {
      updNewPostText: (text) => {
            let action = updNewPostActionCreator(text);
            dispatch(action)} ,
      addPost: () => {
            dispatch(addPostActionCreator())}
      }
}

const PostsContainer = connect (mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
