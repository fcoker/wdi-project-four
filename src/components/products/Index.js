import React from 'react';
import axios from 'axios';
import ProductBox from './ProductBox';


class ProductsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios.get('/api')
      .then(result => this.setState({ products: result.data, filteredProducts: result.data }));
  }
  
  handleSearch(event){
    this.setState({ query: event.target.value });
    let filteredProducts = this.state.filteredProducts;
    const products = this.state.products;
    const query = this.state.query;
    filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.format.toLowerCase().includes(query.toLowerCase()) ||
      product.genre.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ filteredProducts: filteredProducts });
  }

  render() {
    return (
      <section>
        <div>

          <form>
            <input
              placeholder="Search for..."
              ref={input => this.search = input}
              onChange={this.handleSearch}
              className="form-input"
            />
          </form>
        </div>
        <hr/>
        <div>
          <div>
            {this.state.filteredProducts && this.state.filteredProducts.map(
              product => <ProductBox key={product._id} product={product}/>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default ProductsIndex;
