import React, { Component } from "react";

class ProfileData extends Component {
  constructor(props) {
    super(props);

  }
  render() {
     const {followers , following , public_repos , public_gists , name , location , email , company , blog , created_at , updated_at , html_url} = this.props.profile
    return (
      <>
        <div className='card'>
             <div className='card-header' style={{textAlign:'left'}}>
                <span className='btn btn-primary mx-2 my-2'>{followers} Followers</span>
                <span className='btn btn-success mx-2 my-2'>{public_repos} Repos</span>
                <span className='btn btn-warning mx-2 my-2'>{public_gists} Gists</span>
                <span className='btn btn-danger mx-2 my-2'>{following} Following</span>
            </div>

             <div className='card-body'>
                  <ul className='list-group' style={{textAlign:'left'}}>
                     <li className='list-group-item'> 
                     Username : {name}
                     </li>

                     <li className='list-group-item'> 
                     Location : {location}
                     </li>
                     <li className='list-group-item'> 
                     Email : {email}
                     </li>
                     <li className='list-group-item'> 
                     Company : {company}
                     </li>
                     <li className='list-group-item'> 
                     Blog : {blog}
                     </li>

                     <li className='list-group-item'> 
                     Member Since : {created_at} 
                     </li>
                     <li className='list-group-item'> 
                     Profile URL : {html_url}
                     </li> 
                     <li className='list-group-item'> 
                     Last Update : {updated_at}
                     </li> 
                 </ul> 
             </div> 
        </div>
        </>
    );
  }
}

export default ProfileData;
