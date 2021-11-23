import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Feed from './Components/NewsFeed/Feed';
import Settings from './Components/Settings/Settings'
import UserPageContainer from './Components/UserPage/UserPageContainer'
import { Component } from 'react';
import Preloader from './Components/Common/Preloader';
import { connect } from 'react-redux';
import {initializeApp} from './Components/Redux/AppReducer';
import { compose } from 'redux';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <div className="header">
            {" "}
            <HeaderContainer />
          </div>
          <div className="nav">
            {" "}
            <Navbar />
          </div>
          <div className="app-wrapper-content">
            <Route path="/messages" render={() => <DialogsContainer />} />
            <Route path="/home/:userId?" render={() => <ProfileContainer />} />
            <Route path="/feed" component={Feed} />
            <Route path="/users" render={() => <UserPageContainer />} />
            <Route path="/settings" component={Settings} />
            <Route path="/login" component={Login} />
          </div>
        </div>{" "}
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose( withRouter, connect (mapStateToProps, {initializeApp}))(App);


