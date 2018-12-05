import React from 'react';
import axios from 'axios';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    axios.post(`/api/users/${this.props.match.params.id}`, this.state)
      .then(result => this.props.history.push(`/user/${result.data._id}`));
    event.preventDefault();
    console.log('Form submitted with ', this.state);
  }

  handleChange({ target: { name, value }}) {
    console.log('event.target.name is', event.target.name, this.state);
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