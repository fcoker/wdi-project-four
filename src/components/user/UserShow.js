import React from 'react';
import axios from 'axios';
import { getHeader, decodeToken } from '../../lib/auth';
import { Link } from 'react-router-dom';
import MyPurchaseHistory from '../common/MyPurchaseHistory';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.userId}`, getHeader())
      .then(res => {
        this.setState({ user: res.data });
      });
  }


  render() {
    const user = this.state.user;
    return (
      <section className="profileShow container">
        {user
          ?
          <div className="columns is-multiline">
            <div className="column is-4">

              <div className="columns is-multiline">

                <div className="column is-12 has-text-centered">
                  <img className="profilePic" src={user.profilePic} alt={user.name}/>
                  <div className="columns is-multiline">
                    <div className="column is-8 is-offset-1 has-text-left">
                      <p><b>{user.username}</b></p>
                      <p>Email: {user.email}</p>
                    </div>
                    <div className="column is-1">
                      {user._id === decodeToken().sub &&
                        <Link to= {`/users/${decodeToken().sub}/edit`}>
                          <button className="button is-light">
                            <i className="fas fa-edit"></i>
                          </button>
                        </Link>
                      }
                    </div>

                  </div>
                </div>


              </div>
            </div>

            <div className="column is-8 purchase-history">
              <div className="columns is-multiline">
                <div className="column is-11">
                  <h3 className="title is-3">Order History:</h3>
                  <MyPurchaseHistory />
                </div>
              </div>
            </div>
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
