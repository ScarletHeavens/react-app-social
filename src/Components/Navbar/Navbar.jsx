import c from './Navbar.module.css'

const Navbar = () => {
return (
    <div className = {c.nav}>
    <div><a href='#s'>Home</a> </div>
    <div><a href='#s'>News Feed</a></div>
    <div><a href='#s'>Messages</a></div>
    <br></br>
    <div><a href='#s'>Settings</a></div>
    </div>
);
}

export default Navbar;