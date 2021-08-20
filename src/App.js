import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Feed from './Components/NewsFeed/Feed';
import Settings from './Components/Settings/Settings'



const App = (props) => {
  return (
     <BrowserRouter>
    <div className ='app-wrapper'>
    <div className = 'header'> < Header /></div>
    <div className = 'nav'> < Navbar/></div>
    <div className = 'app-wrapper-content'> 
      < Route path='/messages' render ={ () => < Dialogs state = {props.state.messagePage} />} /> 
      < Route path='/home' render = { () => <Profile profilePage = {props.state.profilePage} dispatch = {props.dispatch}/> } />
      < Route path='/feed' component ={Feed}/>
      < Route path='/settings' component ={Settings}/>
      </div>
</div>  </BrowserRouter>
  );
}

export default App;

