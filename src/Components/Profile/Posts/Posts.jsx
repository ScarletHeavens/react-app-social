import c from './Posts.module.css';
import React from 'react';
import NewPost from '/Users/nellimelik/first-react-app/src/Components/Profile/Posts/NewPost/NewPost.jsx';


const Posts = (props) => {
 let publicList = props.state.map(el => (< NewPost message={el.message} likeCount={el.likeCount}/>));
 
 let newPostArea = React.createRef();

 let addPost = () => {
       let text = newPostArea.current.value;
       newPostArea.current.value ='';
       props.addPost(text);
 };


return (<div className = {c.block}>
       <div>
       <h2> My posts </h2>
       </div>
<div><textarea ref= {newPostArea} className = {c.textArea}></textarea></div>
<div><button onClick = {addPost} className={c.button}>new post</button></div>

<div className = {c.message}>
{publicList}
 </div>
</div>)
};

export default Posts;
