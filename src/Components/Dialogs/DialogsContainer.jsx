import Dialogs from './Dialogs'
import {addMessageActionCreator, updNewMessageBodyCreator} from '../Redux/MessagePageReducer'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
return {
    messagePage: state.messagePage,
}
};

let mapDispatchToProps = (dispatch) => {
return {
    updateNewMessageBody: (body) => { dispatch(updNewMessageBodyCreator(body))},
    sendMessage: () => {dispatch(addMessageActionCreator())},
}
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;