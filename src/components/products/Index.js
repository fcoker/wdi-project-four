import React from 'react';
import axios from 'axios';
import ProductBox from './ProductBox';


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
        {this.state.products && this.state.products.map(product => <ProductBox key={product._id} product={product}/>)}
      </section>
    );
  }
}
export default ProductsIndex;
