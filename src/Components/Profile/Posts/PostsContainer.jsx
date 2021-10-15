import Posts from './Posts';
import {addPostActionCreator} from '../../Redux/ProfilePageReducer'
import {connect} from 'react-redux';


let mapStateToProps =(state)=>{
return {
      posts: state.profilePage.posts,
      }
}

let mapDispatchToProps = (dispatch) => {
      return {

      addPost: (newPostArea) => {
            dispatch(addPostActionCreator(newPostArea))}
      }
}

const PostsContainer = connect (mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
