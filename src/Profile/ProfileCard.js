import React, { Component } from "react";
class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { login , avatar_url, bio, html_url } = this.props.profile;
    return (
      <>
        <div className='card' style={{marginBottom:'20px'}}>
            <img className='img-fluid' alt='' src={avatar_url} />
            <div className='card-body'>
                <h5 className='card-title'> 
                {login}
                </h5>
                <p>{bio}</p>
                <a href={html_url} target='_blank' className='btn btn-success btn-sm' rel="noreferrer">Profile</a>
            </div>
        </div>
      </>
    );
  }
}

export default ProfileCard;
