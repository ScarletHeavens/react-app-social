import { Field } from 'redux-form';
import styles from './../FormControls/FormControls.module.css'

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
  
    const hasError = error && touched;
   
    return (
        <div > 
            <div className = {hasError? styles.error : ' '}>
            <textarea className = {styles.formControl} {...props} {...input} />
            </div>
           {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = ({input, meta: {touched, error}, ...props}) => { 
    const hasError = error && touched;
   
    return (
        <div className = {hasError? styles.error : ' '}> 
            <input {...props} {...input} />
           {hasError && <span>{error}</span>}
        </div>
    )
}

export const fieldCreator = (validator, placeholder, name, component, props = {}, text = "") => {
  return  <div><Field validate={validator} placeholder= {placeholder} name = {name} component ={component} {...props} />{text}</div>

}