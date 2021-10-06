import c from './Posts.module.css';
import React from 'react';
import NewPost from '/Users/nellimelik/first-react-app/src/Components/Profile/Posts/NewPost/NewPost.jsx';
import {Field, reduxForm} from 'redux-form'
import {required, maxLen} from '../../../utils/validators'
import {Textarea} from '../../Common/FormControls/FormControls'

const maxLen10 =  maxLen(300);

const Posts = (props) => {
 let publicList = props.posts.map(el => (< NewPost message={el.message} likeCount={el.likeCount}/>));

 let  addPost = (value) => {props.addPost(value.newPostArea);};
 
return (<div className = {c.block}>

       <div>
       <h2> My posts </h2>
       </div>
       <AddPostFromRedux onSubmit = {addPost}/>
<div className = {c.message}>
{publicList}
 </div>
</div>)
};


const AddNewPost = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} >
        <div>
        <Field
          validate ={[required, maxLen10]}
          component= {Textarea}
          name="newPostArea"
          placeholder="say something"
        /></div>
        <div>
        <button className={c.button} >Publish</button>
        </div>
        </form>
    </div>
  );
};

const AddPostFromRedux = reduxForm({form: 'profileAddPost'})(AddNewPost)

export default Posts;
