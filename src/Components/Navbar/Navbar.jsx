import c from './Navbar.module.css'

const Navbar = () => {
return (
    <div className = {c.nav}>
    <div><a href='/home'>Home</a> </div>
    <div><a href='/feed'>News Feed</a></div>
    <div><a href='/messages'>Messages</a></div>
    <br></br>
    <div><a href='/settings'>Settings</a></div>
    </div>
);
}

export default Navbar;