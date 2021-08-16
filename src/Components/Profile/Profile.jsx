import c from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return <div>
    <ProfileInfo />
    <Posts state = {props.state.posts} addPost ={props.addPost}/>
    </div>
};

export default Profile; 