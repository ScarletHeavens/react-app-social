import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css'

const Navbar = () => {
return (
    
    <nav className = {c.nav}>
        <div className = {c.item} >
    <div><NavLink to='/home'   activeClassName = {c.active}>Home</NavLink> </div>
    <div><NavLink to='/feed'   activeClassName = {c.active}>News Feed</NavLink></div>
    <div><NavLink to='/messages' activeClassName = {c.active}>Messages</NavLink></div>
    <br></br>
    <div><NavLink to='/settings' activeClassName = {c.active}>Settings</NavLink></div>
    </div>
    </nav>
);}

export default Navbar;