import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import ProductsIndex from './components/products/Index';



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
