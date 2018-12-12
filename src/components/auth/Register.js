import React  from 'react';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    console.log( 'register', this.state);
    axios.post('/api/register', this.state)
      .then(result => {
        console.log('register', result.data);
        this.props.handleRegisterClick();

      });
  }
  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div id="registerbox" className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box back-image">
                <h3 id="registertext" className="title">Register</h3>
                <form className="loginform" onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <input className="input " onChange={this.handleChange}  value={this.state.username || ''}  name="username"  placeholder="Username"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input " onChange={this.handleChange}  value={this.state.email || ''}  name="email"  placeholder="Email"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.password || ''}  name="password" type="password" placeholder="Password"/>
                    </div>
                  </div>
                  <button className="button button-form">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
