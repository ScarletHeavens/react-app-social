import {reduxForm} from "redux-form"
import {connect} from 'react-redux';
import {login, logout } from './../Redux/AuthReducer'
import {Redirect } from "react-router";
import {Input, fieldCreator} from './../Common/FormControls/FormControls';
import {required} from '../../utils/validators'
import c from './../Common/FormControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => { 
    return (
    <form onSubmit = {handleSubmit}>
    {fieldCreator([required], "email", "email",Input)}
    {fieldCreator([required], "password", "password",Input, {type:"password"})}
    {fieldCreator(null, null, "rememberMe", Input, {type: 'checkbox'}, 'remember me' )}
    {error && <div className = {c.formSummaryError}> {error}</div> }
    {captchaUrl && <div>
    <img alt='' src={captchaUrl}/>
    {fieldCreator([required], "insert captcha", "captcha", Input, {})}
    </div>}
    <div><button>Login</button></div>
    </form>
  )};

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {return <Redirect to ={'/home'}/ > }

    return <div>
    <h1>Login to see the page</h1>
    <ReduxLoginForm onSubmit = {onSubmit} captchaUrl = {props.captchaUrl} /> 
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login, logout})(Login);