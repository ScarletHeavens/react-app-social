import React from 'react'
import { reduxForm } from 'redux-form';
import { fieldCreator, Input, Textarea } from '../../Common/FormControls/FormControls'
import c from '../../Common/FormControls/FormControls.module.css'


const ProfileDetailsForm = ({profile, handleSubmit, error }) => {
    return (
 <form onSubmit = {handleSubmit}> 
     <div><button>Save</button></div>
     {error && <div className = {c.formSummaryError}> {error} </div> }
      <div>Full Name: {fieldCreator(null, "Full name", "fullName", Input)}</div>
      <div>
        About me: {fieldCreator(null, "About", "aboutMe", Textarea)}
      </div>
      <div>Looking for a job: {fieldCreator(null, "description", "lookingForAJobDescription", Input )}</div>
      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key) => (
        <div key={key}> {key} : {fieldCreator(null, key, `contacts.${key}`, Input)}</div>
        ))}
      </div>
   
</form>
    )}   

    const ReduxProfileDetailsForm = reduxForm({form: 'profileDetails'})(ProfileDetailsForm);
export default ReduxProfileDetailsForm;
