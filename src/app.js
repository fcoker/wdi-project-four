import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import ProductsIndex from './components/products/Index';
import ProductNew from './components/products/New';
import ProductUpdate from './components/products/Edit';
import ProductsShow from './components/products/Show';



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
              <Route exact path="/new" component={ProductNew} />
              <Route path="/:id/edit" component={ProductUpdate} />
              <Route path='/:id' component={ProductsShow}/>
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
