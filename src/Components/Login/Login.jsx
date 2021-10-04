import {Field, reduxForm} from "redux-form"
import {connect} from 'react-redux';
import {login, logout} from './../Redux/AuthReducer'
import { Redirect } from "react-router";


const LoginForm = (props) => { 
    return (
    <form onSubmit = {props.handleSubmit}>
    <div><Field placeholder= {'email'} name = {"email"} component ={"input"}/></div>
    <div><Field placeholder= {'password'} name = {"password"} component ={"input"} type = {'password'}/></div>
    <div><Field type={"checkbox"} name = {"rememberMe"} component = {"input"}/> "remember me"</div>
    <div><button>Login</button></div>
    </form>
  )}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {return <Redirect to ={'/home'}/ > }

    return <div>
    <h1>Login to see the page</h1>
    <ReduxLoginForm onSubmit = {onSubmit} /> 
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);