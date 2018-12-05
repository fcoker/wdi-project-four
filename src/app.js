import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import ProductsIndex from './components/products/Index';
import ProductNew from './components/products/New';
import ProductUpdate from './components/products/Edit';
import ProductsShow from './components/products/Show';
import Login from './components/auth/Login';
import Register from './components/auth/Register';



import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main className="container">
            <Switch>
              <Route exact path='/' component={ProductsIndex} />
              <Route exact path="products/new" component={ProductNew} />
              <Route path="products/:id/edit" component={ProductUpdate} />
              <Route path='products/:id' component={ProductsShow}/>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
