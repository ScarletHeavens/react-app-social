import Profile from './Profile';
import React from 'react';
import {connect} from 'react-redux';
import {getStatus, updateStatus, updatePhoto, getUserProfile, saveChanges} from '../Redux/ProfilePageReducer';
import {withRouter} from 'react-router';
import {withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.loggedIn;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId)
    this.refreshProfile();
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          updatePhoto={this.props.updatePhoto}
          saveChanges={this.props.saveChanges}
        />
      </div>
    );
  }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedIn: state.auth.id,
    isAuth: state.auth.isAuth,
   
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, updatePhoto, saveChanges}),
    withRouter,
    withAuthRedirect
    )(ProfileContainer);