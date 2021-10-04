import { NavLink } from 'react-router-dom'
import c from'./Header.module.css'

const Header = (props) => {
    return (<div className = {c.header}>
        <img src='https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/cropped-logovikinger.png' alt ='myLogo'></img>
        <div className = {c.loginBlock}>
         { props.isAuth
         ? <div>{props.login} <button onClick = {props.logout}>Log out</button></div>
          :<NavLink to ={'/login'}><button>Login</button></NavLink> }</div> 
    </div>);
      }

      export default Header;