import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import './App.css';


const App = () => {
  return (
    <div className ='app-wrapper'>
    <div className ='header'><Header /></div>
    <div className ='nav'><Navbar /></div>
    <div className = 'content'> <Profile /> </div>
</div>
  );
}

export default App;

