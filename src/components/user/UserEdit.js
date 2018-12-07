import React from 'react';
import axios from 'axios';
import { getHeader } from '../../lib/auth';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    axios.put(`/api/users/${this.props.match.params.userId}`, this.state,  getHeader())
      .then(result => this.props.history.push(`/user/${result.data._id}`));
    event.preventDefault();
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>User Name</label>
          <input onChange={this.handleChange}
            value={this.state.username || ''}
            name="username"
          />
          <label>Profile Picture</label>
          <input onChange={this.handleChange}
            value={this.state.profilePic || ''}
            name="profilePic"
          />
          <label>Address</label>
          <input onChange={this.handleChange}
            value={this.state.address || ''}
            name="address"
          />
          <button onClick={this.handleSubmit}>Edit</button>
        </form>
      </section>
    );
  }
}

export default UserEdit;
