import React, {useState, useEffect} from "react";

const ProfileStatusHooks = (props) => {
  
const [editMode, setEditMode]= useState(false);
const [status, setStatus]= useState(props.status);

useEffect( ()=> {
setStatus(props.status);
}, [props.status]);

const activateEdit = () => {
setEditMode(true);
}
const onStatusChange = (e) => {
setStatus (e.currentTarget.value)
}

const deactivateEdit = () => {
  setEditMode(false);
  props.updateStatus(status);
}

  return (
    <div>
      { !editMode && (
        <div>
          <span onClick={activateEdit}>{ props.status || "Has not spoken yet"}</span>
        </div>
      )}
      { editMode && (
        <div>
          <input 
          onChange={onStatusChange}
          onBlur={deactivateEdit}
          autoFocus={true}
          value= {status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusHooks;
