import c from './Posts.module.css';
import NewPost from '/Users/nellimelik/first-react-app/src/Components/Profile/Posts/NewPost/NewPost.jsx';


const Posts = () => {
 return (<div className = {c.block}>
       <div>
       <h2> My posts </h2>
       </div>
<div><textarea></textarea></div>
<div><button>new post</button></div>

<div className = {c.message}>
< NewPost message='I love trans fats'/>
< NewPost message='Misery was inspired by my first girlfriend'/>
 <NewPost message ='Happy FriYay!' /><
/div>
</div>)
};

export default Posts;