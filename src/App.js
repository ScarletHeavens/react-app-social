import './App.css';
import {UserPageContainer,ProfileContainer,HeaderContainer,DialogsContainer} from './Components';
import {Login, Navbar, Feed, Settings} from './Components';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Preloader from './Components/Common/Preloader';
import {initializeApp} from './Components/Redux/AppReducer';
import { Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LazyLoadComponent from './hoc/LazyLoadComponent';

class App extends Component {
 catchUnhandledErrors = (promiseRejectionEvent) => {
 alert('Error occured');
 } 
  
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledRejection', this.catchUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledRejection', this.catchUnhandledErrors)
  }
  
  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <div className="header">
            <HeaderContainer />
          </div>
          <div className="nav">
            <Navbar />
          </div>
          <div className="app-wrapper-content">
            <Switch>
            <Route path="/messages" 
            render={LazyLoadComponent(DialogsContainer)}
            />
            <Route path="/home/:userId?"
            render={LazyLoadComponent(ProfileContainer)}/>
            <Route path="/feed" component={Feed} />
            <Route path="/users" 
            render={LazyLoadComponent(UserPageContainer)} 
            />
            <Route path="/settings" component={Settings} />
            <Route path="/login" component={Login} />
            <Route path='/' render={()=> <Redirect to={'/login'} />}/>
            <Route path="*" render={() => <div>404 page not found</div>}/>
            </Switch>
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


