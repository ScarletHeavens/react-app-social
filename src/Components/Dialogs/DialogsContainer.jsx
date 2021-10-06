import Dialogs from './Dialogs'
import {addMessageActionCreator} from '../Redux/MessagePageReducer'
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
return {
    messagePage: state.messagePage}
};

let mapDispatchToProps = (dispatch) => {
return {
    sendMessage: (newMessageBody) => {dispatch(addMessageActionCreator(newMessageBody))},
}}

export default compose( 
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs);