import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Common/Header';
import ProductsIndex from './components/products/Index';
import ProductNew from './components/products/New';
import ProductUpdate from './components/products/Edit';
import ProductsShow from './components/products/Show';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserShow from './components/user/UserShow';
import UserEdit from './components/user/UserEdit';



import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (

      <div>
        <Header />
        <main className="container">
          <Switch>
            <Route exact path='/' component={ProductsIndex} />
            <Route exact path="/product/new" component={ProductNew} />
            <Route path="/product/:productId/edit" component={ProductUpdate} />
            <Route path='/product/:productId' component={ProductsShow}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/users/:userId/edit" component={UserEdit} />
            <Route path="/users/:userId" component={UserShow} />
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
