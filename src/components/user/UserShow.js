import React from 'react';
import axios from 'axios';
import { getHeader, decodeToken } from '../../lib/auth';
import { Link } from 'react-router-dom';


export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(getHeader());
    axios.get(`/api/users/${this.props.match.params.userId}`, getHeader())
      .then(res => {
        this.setState({ user: res.data });
      });
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
            </div>

            <div>
              <h3>Order History</h3>
            </div>

            <Link to= {`/users/${decodeToken().sub}/edit`}>
              <button>Edit</button>
            </Link>

          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
