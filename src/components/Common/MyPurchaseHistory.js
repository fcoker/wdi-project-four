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
            <div className="columns is-pulled-left" key={purchase._id} >
              <div className="column is-2.5">
                <p>{moment(purchase.createdAt).fromNow()}</p>
              </div>
              <div className="column is-6" >
                <p>{purchase.product.name}</p>
              </div>
              <div className="column ">
                <p>£{purchase.unitPrice} per unit</p>
              </div>
              <div className="column ">
                <p>{purchase.unitQuantity}</p>
              </div>
              <div className="column ">
                <p>Total £{purchase.totalPrice}</p>
              </div>
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
