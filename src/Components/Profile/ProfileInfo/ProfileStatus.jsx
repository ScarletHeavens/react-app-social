import c from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEdit = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEdit = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEdit}>
              {this.props.status || "Has not spoken yet"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEdit}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
};

export default ProfileStatus;