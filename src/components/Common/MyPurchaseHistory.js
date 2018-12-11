import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { getHeader } from '../../lib/auth';

class MyPurchaseHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/mypurchases', getHeader())
      .then(result => this.setState({ purchases: result.data }));
  }
  render() {
    const hasPurchases = this.state.purchases && !!this.state.purchases.length;
    return (
      <main>
        <table width="100%">
          <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Qty</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {hasPurchases
              ?
              this.state.purchases.map(purchase =>
                <tr key={purchase._id} >

                  <td>{moment(purchase.createdAt).fromNow()}</td>
                  <td>{purchase.product.name}</td>
                  <td>£{purchase.unitPrice}</td>
                  <td>{purchase.unitQuantity}</td>
                  <td>£{purchase.totalPrice}</td>

                </tr>
              )
              :
              <tr>
                <td colSpan={5}>Your purchases will be shown here.</td>
              </tr>
            }
          </tbody>
        </table>
      </main>
    );
  }
}

export default MyPurchaseHistory;
