import c from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader'
import img from '../../../Assets/Images/profile.png';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
   if (!props.profile) {
       return <Preloader/>
   } 
    return <div>
     <div>
    <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/members/1/cover-image/5f6d2c93c75db-bp-cover-image.jpg" alt='sunset'></img>
    </div> 
    <div className = {c.ava}> <img src= {!props.profile.photos.large ? img : props.profile.photos.large  }/>
    <ProfileStatus status={props.status} updateStatus ={props.updateStatus}/>

    </div>
    </div>
};
 
export default ProfileInfo; 