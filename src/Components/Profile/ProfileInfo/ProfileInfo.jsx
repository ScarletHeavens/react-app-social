import c from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader'

const ProfileInfo = (props) => {
   if (!props.profile) {
       return <Preloader/>
   } 
    return <div>
    <div>
    <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/members/1/cover-image/5f6d2c93c75db-bp-cover-image.jpg" alt='sunset'></img>
    </div>
    <div className = {c.ava}> <img src= {props.profile.photos.large}></img>
    <span className = {c.bio}> {props.profile.aboutMe}</span></div>
    </div>
};

export default ProfileInfo; 