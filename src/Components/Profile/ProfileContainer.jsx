import Profile from './Profile';
import React from 'react';
import {connect} from 'react-redux';
import {getUserProfile} from '../Redux/ProfilePageReducer';
import {withRouter} from 'react-router';
import {withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() { 
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 2;}
        this.props.getUserProfile(userId);
    }
   
    render(){
 
    return (
    <div>
    <Profile {...this.props} profile = {this.props.profile} />
    </div>)
}};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer);