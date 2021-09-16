import React, { Component } from "react";

class Repos extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="card" style={{marginBottom:'2px'}}>
          <div className="card-header bg-secondary text-white">
            <h3>Github Repos</h3>
          </div>
          <div className="card-body">
            <ul className="list-group">
              {this.props.repos.map((repo) => {
                return (
                  <li className="list-group-item" style={{display:'flex' , justifyContent:"space-between"}}>
                    <a href={repo.html_url} target='_blank' rel="noreferrer" style={{textDecoration:"none"}}>{repo.name}</a>
                    <div className='rating'>
                    <span className="btn btn-primary mx-1">{repo.stargazers_count}</span>
                    <span className="btn btn-warning mx-1">{repo.watchers_count}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Repos;
