import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { getToken } from '../lib/auth';

class PurchaseHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = getToken();
    console.log(token);
    axios.get('/api/purchases', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(result => this.setState({ purchases: result.data }));
  }
  render() {
    console.log(this.state.purchases);
    return(
      <main>
        {
          this.state.purchases && this.state.purchases.map(purchase =>
            <div key={purchase._id} style={{ display: 'flex', justifyContent: 'space-around' }}>
              <p>{purchase.burger.name}</p>
              <p>Per unit £{purchase.price}</p>
              <p>{purchase.quantity}</p>
              <p>Total £{purchase.totalPrice}</p>
              <p>{moment(purchase.createdAt).fromNow()}</p>
            </div>
          )
        }
      </main>
    );
  }
}

export default PurchaseHistory;
