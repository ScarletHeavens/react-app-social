import c from './Posts.module.css';
import React from 'react';
import NewPost from '/Users/nellimelik/first-react-app/src/Components/Profile/Posts/NewPost/NewPost.jsx';


const Posts = (props) => {
 let publicList = props.state.map(el => (< NewPost message={el.message} likeCount={el.likeCount}/>));
 
 let newPostArea = React.createRef();

 let addPost = () => {
       props.addPost();
      
 };

 let onPostChange = () => {
 let text = newPostArea.current.value;
 props.updateNewPostText(text);
 }

return (<div className = {c.block}>
       <div>
       <h2> My posts </h2>
       </div>
<div>
      <textarea onChange = {onPostChange} ref= {newPostArea} className = {c.textArea} value = {props.newPostChange}/>
</div>
<div>
      <button onClick = {addPost} className={c.button}>new post</button>
      </div>

<div className = {c.message}>
{publicList}
 </div>
</div>)
};

export default Posts;
