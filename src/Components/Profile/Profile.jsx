import c from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return <div>
    <ProfileInfo />
    <Posts posts = {props.profilePage.posts} dispatch ={props.dispatch} newPostChange = {props.profilePage.newPostChange} />
    </div>
};

export default Profile; 