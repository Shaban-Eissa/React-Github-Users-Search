import React, { Component } from "react";
import Profile from "../Profile/Profile";
import axios from "axios";
import { clientId } from "./UserID";
import Repos from "../Repos/Repos";
class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profile: null,
      repos: null,
    };
  }

  updateInput = (e) => {
    this.setState({
      ...this.state,
      username: e.target.value,
    });
  };

  searchUser = (e) => {
    e.preventDefault();
    this.searchProfile();
    this.searchRepos();
  };

  searchProfile = () => {
    axios
      .get(
        `https://api.github.com/users/${this.state.username}?clientId=${clientId}`
      )
      .then((res) => {
        this.setState({
          profile: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  searchRepos = () => {
    axios
      .get(
        `https://api.github.com/users/${this.state.username}/repos?clientId=${clientId}`
      )
      .then((res) => {
        this.setState({
          repos: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header bg-secondary text-white">
                  <h3>Github User Search</h3>
                </div>
                <div className="card-body">
                  <form className="form-inline" onSubmit={this.searchUser}>
                    <div className="form-group">
                      <input
                        value={this.state.username}
                        onChange={this.updateInput}
                        type="text"
                        size="40"
                        className="form-control"
                        placeholder="User Search"
                      />
                    </div>

                    <div>
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn-secondary btn-sm mt-3"
                        style={{padding:'6px 30px'}}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col">
              {this.state.profile ? (
                <Profile profile={this.state.profile} />
              ) : null}
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col">
              {this.state.repos ? <Repos repos={this.state.repos} /> : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Github;
