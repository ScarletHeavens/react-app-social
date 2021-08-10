import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs'
import './App.css';


const App = () => {
  return (
    <div className ='app-wrapper'>
    <div className = 'header'><Header /></div>
    <div className = 'nav'><Navbar /></div>
    {/* <div className = 'app-wrapper-content'> <Profile /> </div> */}
    <div className = 'app-wrapper-content'>< Dialogs /></div>
</div>
  );
}

export default App;

