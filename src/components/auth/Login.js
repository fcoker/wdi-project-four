
import React  from 'react';
import axios from 'axios';

import { saveToken } from '../../lib/auth';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    axios.post('/api/login', this.state)
      .then(result => {
        saveToken(result.data.token);
        this.props.handleLoginClick();
      });
  }
  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div id="loginbox" className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box back-image">
                <h3 id="logintext" className="title">Login</h3>
                <form className="loginform" onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <input className="input " onChange={this.handleChange}  value={this.state.email || ''}  name="email"  placeholder="Email"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.password || ''}  name="password"  type="password" placeholder="Password"/>
                    </div>
                  </div>
                  <button className="button button-form">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
