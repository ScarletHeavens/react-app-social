import c from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader'
import img from '../../../Assets/Images/profile.png';
import ProfileStatusHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateStatus}) => {
   if (!profile) {
       return <Preloader/>
   } 
    return <div>
     <div>
    <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/members/1/cover-image/5f6d2c93c75db-bp-cover-image.jpg" alt='sunset'></img>
    </div> 
    <div className = {c.ava}> <img src= {!profile.photos.large ? img :profile.photos.large  }/>
    <ProfileStatusHooks status={status} updateStatus ={updateStatus}/>

    </div>
    </div>
};
 
export default ProfileInfo; 