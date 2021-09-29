import Dialogs from './Dialogs'
import {addMessageActionCreator, updNewMessageBodyCreator} from '../Redux/MessagePageReducer'
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
return {
    messagePage: state.messagePage}
};

let mapDispatchToProps = (dispatch) => {
return {
    updateNewMessageBody: (body) => { dispatch(updNewMessageBodyCreator(body))},
    sendMessage: () => {dispatch(addMessageActionCreator())},
}}

export default compose( 
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs);