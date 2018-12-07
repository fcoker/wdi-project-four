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
        {hasPurchases
          ?
          this.state.purchases.map(purchase =>
            <div key={purchase._id} style={{ display: 'flex', justifyContent: 'space-around' }}>
              <p>{moment(purchase.createdAt).fromNow()}</p>
              <p>{purchase.product.name}</p>
              <p>£{purchase.unitPrice} per unit</p>
              <p>{purchase.unitQuantity}</p>
              <p>Total £{purchase.totalPrice}</p>
            </div>
          )
          :
          <p>Your purchases will be shown here.</p>
        }
      </main>
    );
  }
}

export default MyPurchaseHistory;
