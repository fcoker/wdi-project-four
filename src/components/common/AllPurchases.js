import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { getHeader } from '../../lib/auth';
import { Link } from 'react-router-dom';

class AllPurchases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getTotal = this.getTotal.bind(this);
  }

  componentDidMount() {
    axios.get('/api/allpurchases', getHeader())
      .then(result => {
        result.data.sort((a, b)=> new Date(b.createdAt) - new Date(a.createdAt));
        this.setState({ purchases: result.data });
      });
  }

  getTotal(purchases){
    const totals = [];
    purchases.forEach(purchase => {
      parseFloat(purchase.totalPrice.toFixed(2));
      totals.push(purchase.totalPrice);
    });
    return parseFloat(totals.reduce((a,b) => a+b,0).toFixed(2));
  }
  render() {
    return (
      <main className="statisticShow">
        <h1>Statistics</h1>
        <table width="100%">
          <thead>
            <tr>
              <th colSpan="2" className="grand-total">Total Purchases: {this.state.purchases && this.state.purchases.length}</th>
              <th colSpan="4" className="text-is-right grand-total">Total: £{this.state.purchases && this.getTotal(this.state.purchases)}</th>
            </tr>
            <tr>
              <th>Date ↑</th>
              <th>Username</th>
              <th>Product Name</th>
              <th className="text-is-right">Unit Price</th>
              <th className="text-is-right">Unit Quantity</th>
              <th className="text-is-right">Total Price</th>
            </tr>
          </thead>
          <tbody>

            {
              this.state.purchases && this.state.purchases.map(purchase =>
                <tr key={purchase._id} >
                  <td>{moment(purchase.createdAt).calendar()}</td>
                  <td><Link to={`/users/${purchase.user._id}`} className="has-text-white">{purchase.user.username}</Link></td>
                  <td><Link to={`/product/${purchase.product._id}`} className="has-text-white">{purchase.product.name}</Link></td>
                  <td className="text-is-right">£{purchase.unitPrice}</td>
                  <td className="text-is-right">{purchase.unitQuantity}</td>
                  <td className="text-is-right">£{purchase.totalPrice}</td>
                </tr>
              )
            }

          </tbody>
        </table>
      </main>
    );
  }
}

export default AllPurchases;
