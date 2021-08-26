import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css'

const Navbar = () => {
return (
    
    <nav className = {c.nav}>
        <div className = {c.item} >
    <div><NavLink to='/home'   activeClassName = {c.active}>Home</NavLink> </div>
    <div><NavLink to='/feed'   activeClassName = {c.active}>News Feed</NavLink></div>
    <div><NavLink to='/messages' activeClassName = {c.active}>Messages</NavLink></div>
    <div><NavLink to='/users' activeClassName = {c.active}>Users</NavLink></div>
    <br></br>
    <div><NavLink to='/settings' activeClassName = {c.active}>Settings</NavLink></div>
    </div>
    <br/>
    <div className = {c.block}><div className = {c.skills}>Skills</div>
    <img src ='https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/cropped-logovikinger.png'></img><span>Dancin</span> 
    <img src ='https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/cropped-logovikinger.png'></img><span>Playin</span> 
    <img src ='https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/cropped-logovikinger.png'></img><span>Livin</span>
    </div>
    </nav>
);}

export default Navbar;