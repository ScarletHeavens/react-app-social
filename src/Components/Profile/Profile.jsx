import c from './Profile.module.css'
import Posts from './Posts/Posts'


const Content = () => {
    return <div className ={c.content}>
    <div>
    <img src="https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg" alt='sunset'></img>
    </div>
    <div className = {c.ava}> <img src='https://www.pinclipart.com/picdir/big/51-511102_design-free-logo-srj-hd-logo-png-clipart.png'></img> Hi, my name is Stephen King and I am a beginner writer. Follow me to learn everything about horror.</div>
    <div> <Posts /></div>
    </div>
};

export default Content; 