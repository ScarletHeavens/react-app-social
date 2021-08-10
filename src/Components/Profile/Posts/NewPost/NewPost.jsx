import c from './NewPost.module.css'

const NewPost = (props) => {
    return (<div className = {c.avatar}>
        <img src ='https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/cropped-logovikinger.png'></img> 
        {props.message}
        <div className = {c.like}><span>like</span></div>
        </div>
    );
}

export default NewPost;
