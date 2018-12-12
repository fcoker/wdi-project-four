import React from 'react';
import axios from 'axios';
import { getHeader, decodeToken } from '../../lib/auth';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(`/api/users/${decodeToken().sub}`, getHeader())
      .then(result=> {
        this.setState( result.data );
      });
  }

  handleSubmit(event) {
    axios.put(`/api/users/${this.props.match.params.userId}`, this.state,  getHeader())
      .then(result => this.props.history.push(`/users/${result.data._id}`));
    event.preventDefault();
  }

  handleChange({ target: { name, value }}) {
    this.setState({ ...this.state, [name]: value });
  }

  render() {
    return (
      <section>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div id="userEditBox"className="box">
                <form onSubmit={this.handleSubmit}>
                  <h1>Edit</h1>
                  <div className="field">
                    <div className="control">
                      <label>User Name</label>
                      <input className="input " onChange={this.handleChange}  value={this.state.username || ''}  name="username"  placeholder="username"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label>Profile Picture</label>
                      <input className="input " onChange={this.handleChange}  value={this.state.profilePic || ''}  name="profilePic"  placeholder="profile Pic URL"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label>Address</label>
                      <input className="input" onChange={this.handleChange}   value={this.state.address || ''}  name="address"  placeholder="address"/>
                    </div>
                  </div>
                  <button className="button is-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>


      </section>
    );
  }
}

export default UserEdit;
