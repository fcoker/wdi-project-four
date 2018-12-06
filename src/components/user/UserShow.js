import React from 'react';
import axios from 'axios';


export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ user: res.data });
        console.log('this.state in userShow has been set to ', this.state.user);
      });
  }

  handleClick() {
    console.log(this.state);

  }

  render() {
    const user = this.state.user;
    return (
      <section>
        {user
          ?
          <div>

            <div>
              <img src={user.profilePic} alt={user.name}/>
              <p>{user.username}</p>
            </div>

            <div>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.address}</p>
            </div>

            <div>
              <h3>Order History</h3>
            </div>

            <div>
              <button onClick={this.handleClick}>Edit</button>
            </div>

          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
