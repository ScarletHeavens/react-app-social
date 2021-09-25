import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Feed from './Components/NewsFeed/Feed';
import Settings from './Components/Settings/Settings'
import UserPageContainer from './Components/UserPage/UserPageContainer'



const App = () => {
  return (
     <BrowserRouter>
    <div className ='app-wrapper'>
    <div className = 'header'> < HeaderContainer /></div>
    <div className = 'nav'> < Navbar/></div>
    <div className = 'app-wrapper-content'> 
      < Route path='/messages' render ={ () => < DialogsContainer/>} /> 
      < Route path='/home/:userId?' render = { () => <ProfileContainer /> } />
      < Route path='/feed' component ={Feed}/>
      < Route path='/users' render= {() => <UserPageContainer /> } />
      < Route path='/settings' component ={Settings} />
      </div>
</div>  </BrowserRouter>  
  );
}

export default App;

