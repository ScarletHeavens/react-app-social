import c from './NewPost.module.css'

const NewPost = (props) => {
    return (<div className = {c.avatar}>
        <img src ='https://www.pinclipart.com/picdir/big/51-511102_design-free-logo-srj-hd-logo-png-clipart.png'></img> 
        {props.message}
        <div className = {c.like}><span>like</span></div>
        </div>
    );
}

export default NewPost;
