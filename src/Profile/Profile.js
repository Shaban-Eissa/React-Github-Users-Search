import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import ProfileData from "./ProfileData";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              {Object.keys(this.props) !== 0 ? (
                <ProfileCard profile={this.props.profile} />
              ) : null}
            </div>
            <div className="col-md-9">
              {Object.keys(this.props) !== 0 ? (
                <ProfileData profile={this.props.profile} />
              ) : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
