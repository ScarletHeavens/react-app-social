import c from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return <div>
    <div>
    <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/members/1/cover-image/5f6d2c93c75db-bp-cover-image.jpg" alt='sunset'></img>
    </div>
    <div className = {c.ava}> <img src='https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/cropped-logovikinger.png'></img> Hi, my name is Stephen King and I am a beginner writer. Follow me to learn everything about horror.</div>
    </div>
};

export default ProfileInfo; 