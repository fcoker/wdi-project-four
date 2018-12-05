import React from 'react';
import axios from 'axios';


class ProductsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/')
      .then(result => this.setState({ products: result.data }));
  }

  render() {
    return (
      <section>
        <h1>aLl PrOdUcTs</h1>
      </section>
    );
  }
}
export default ProductsIndex;
