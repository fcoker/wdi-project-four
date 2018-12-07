import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Common/Header';
import Search from './components/Common/Search'
import ProductsIndex from './components/products/Index';
import ProductNew from './components/products/New';
import ProductUpdate from './components/products/Edit';
import ProductsShow from './components/products/Show';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      login: false,
      register: false
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
  }
  toggleLogin(){
    this.setState({ login: !this.state.login });
  }
  toggleRegister(){
    this.setState({ register: !this.state.register });
  }
  render() {
    return (

      <div>
        <Header handleLoginClick={this.toggleLogin} handleRegisterClick={this.toggleRegister}/>
        <main className="container">
          <Search />
          {this.state.login && <Login handleLoginClick={this.toggleLogin}/>}
          {this.state.register && <Register handleRegisterClick={this.toggleRegister}/>}
          <Switch>
            <Route exact path='/' component={ProductsIndex} />
            <Route exact path="/product/new" component={ProductNew} />
            <Route path="/product/:productId/edit" component={ProductUpdate} />
            <Route path='/product/:productId' component={ProductsShow}/>
          </Switch>
        </main>
      </div>

    );
  }
}
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
