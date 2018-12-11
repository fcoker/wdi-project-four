import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { getToken, getHeader } from '../../lib/auth';

class AllPurchases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = getToken();
    console.log(token);
    axios.get('/api/allpurchases', getHeader())
      .then(result => this.setState({ purchases: result.data }));
  }
  render() {
    console.log(this.state.purchases);
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
              <th>Total Price</th>
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
                  <td>Total £{purchase.totalPrice}</td>
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
