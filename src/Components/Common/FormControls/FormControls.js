import styles from './../FormControls/FormControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
  
    const hasError = meta.error && meta.touched;
   
    return (
        <div className = {styles.formControl +  ' ' + (hasError? styles.error : ' ')}> 
            <div  className ={styles.textarea} >
            <textarea {...props} {...input} />
            </div>
           {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
   
    return (
        <div className = {hasError? styles.error : ' '}> 
            <textarea {...props} {...input} />
           {hasError && <span>{meta.error}</span>}
        </div>
    )
}