import c from './ProfileInfo.module.css'
import React from 'react';
import Preloader from '../../Common/Preloader'
import img from '../../../Assets/Images/profile.png';
import ProfileStatusHooks from './ProfileStatusWithHooks';
import ProfileDetails from './ProfileDetails';
import ProfileDetailsForm from './ProfileDetailsForm';


const ProfileInfo = ({profile, status, updateStatus, isOwner, updatePhoto, saveChanges}) => {
    const [hide, setHide] = React.useState(true);
    const [editMode, setEditMode] = React.useState(false);
    
    let handleOnClick = (e) => {
    if (e.target.files.length) {
       setHide(true); 
       updatePhoto(e.target.files[0]);
    }  
   };

    let onSubmit = (formData) => {
        saveChanges(formData).then(() => {
        setEditMode(false);
        });  
    }
   
   if (!profile) {
    return <Preloader/>
};
    return <div>
     <div >
    <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/members/1/cover-image/5f6d2c93c75db-bp-cover-image.jpg" alt='sunset' />
    </div> 
    <div className = {c.ava}> 
    <input type={"file"} className = {c.imageInput} hidden = {hide} onClick = {handleOnClick}/>
    <img alt='' src= {!profile.photos.large ? img :profile.photos.large} onClick ={() => {if (isOwner) setHide(!hide)}}/>
    {editMode ? 
    <ProfileDetailsForm initialValues = {profile} profile = {profile} isOwner= {isOwner} onSubmit = {onSubmit}/> : 
    <ProfileDetails profile = {profile}   isOwner= {isOwner} activateEdit ={() => setEditMode(true)}/>}
    <ProfileStatusHooks status={status} updateStatus ={updateStatus}/>
    </div>
    </div>
};

 
export default ProfileInfo; 