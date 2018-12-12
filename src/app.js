import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Header from './components/common/Header';
// import Search from './components/common/Search';
import ProductsIndex from './components/products/Index';
import ProductNew from './components/products/New';
import ProductUpdate from './components/products/Edit';
import ProductsShow from './components/products/Show';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserShow from './components/user/UserShow';
import UserEdit from './components/user/UserEdit';
import Basket from './components/common/Basket';
import AllPurchases from './components/common/AllPurchases';
import NotFound from './components/common/NotFound';


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
    this.setState({ login: !this.state.login, register: false });
  }
  toggleRegister(){
    this.setState({ register: !this.state.register, login: false });
  }





  render() {
    return (
      <div>
        <Header handleLoginClick={this.toggleLogin} handleRegisterClick={this.toggleRegister}/>
        <main className="container">

          {this.state.login && <Login handleLoginClick={this.toggleLogin}/>}
          {this.state.register && <Register handleRegisterClick={this.toggleRegister}/>}
          <Switch>
            <Route exact path="/" component={ProductsIndex} />
            <Route exact path="/product/new" component={ProductNew} />
            <Route exact path="/stats" component={AllPurchases} />
            <Route path="/product/:productId/edit" component={ProductUpdate} />
            <Route path="/product/:productId" component={ProductsShow}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/basket" component={Basket} />
            <Route exact path="/register" component={Register} />
            <Route path="/users/:userId/edit" component={UserEdit} />
            <Route path="/users/:userId" component={UserShow} />
            <Route component={NotFound} />
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
