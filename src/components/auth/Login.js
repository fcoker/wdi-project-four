
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
    console.log( 'Login', this.state);
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
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-danger">Login</h3>
              <div className="box">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <input className="input " onChange={this.handleChange}  value={this.state.email || ''}  name="email"  placeholder="email"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.password || ''}  name="password"  placeholder="password"/>
                    </div>
                  </div>
                  <button className="button is-primary">Login</button>
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
