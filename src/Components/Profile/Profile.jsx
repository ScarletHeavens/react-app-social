import c from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return <div>
    <ProfileInfo />
    <Posts state = {props.profilePage.posts} addPost ={props.addPost} newPostChange = {props.profilePage.newPostChange} updateNewPostText={props.updateNewPostText}/>
    </div>
};

export default Profile; 