import React from 'react';
import axios from 'axios';


class ProductsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api')
      .then(result => this.setState({ products: result.data }));
  }

  render() {
    return (
      <section>
        <h1>aLl PrOdUcTs</h1>
        {this.state.products && this.state.products.map(product => <p key={product._id}>{product.name}</p>)}
      </section>
    );
  }
}
export default ProductsIndex;
