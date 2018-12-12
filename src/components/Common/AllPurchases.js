import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { getHeader } from '../../lib/auth';

class AllPurchases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getTotal = this.getTotal.bind(this);
  }

  componentDidMount() {
    axios.get('/api/allpurchases', getHeader())
      .then(result => this.setState({ purchases: result.data }));
  }
  getTotal(purchases){
    const totals = [];
    purchases.forEach(purchase => totals.push(purchase.totalPrice));
    return parseFloat(totals.reduce((a,b) => a+b,0).toFixed(2));
  }
  render() {
    return (
      <main id="statisticShow">
        <h1>Statistics</h1>
        <table width="100%">
          <thead>
            <tr>
              <th>Date</th>
              <th>Username</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Unit Quantity</th>
              <th className="total">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.purchases && this.state.purchases.map(purchase =>
                <tr key={purchase._id} >
                  <td>{moment(purchase.createdAt).fromNow()}</td>
                  <td>{purchase.user.username}</td>
                  <td>{purchase.product.name}</td>
                  <td>£{purchase.unitPrice}</td>
                  <td>{purchase.unitQuantity}</td>
                  <td className="total">£{purchase.totalPrice}</td>
                </tr>
              )
            }
            <tr>
              <th colSpan="6" className="total">Total: £{this.state.purchases && this.getTotal(this.state.purchases)}</th>
            </tr>
          </tbody>
        </table>
      </main>
    );
  }
}

export default AllPurchases;
