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
        console.log('Got the user data:', result.data);
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
