import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setUserData} from '../Redux/AuthReducer';
import axios from 'axios';

class HeaderContainer extends React.Component {
    
    componentDidMount () {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
    .then(response => 
      {if (response.data.resultCode === 0){
        let {email, id, login} = response.data.data;
        this.props.setUserData(email, id, login);
      }
      });
      
}
    
    render(){
        return  < Header {...this.props} />
    }  
      }

    let mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    });

      export default connect(mapStateToProps, {setUserData}) (HeaderContainer);