import React from 'react';
import axios from 'axios';
import ProductBox from './ProductBox';


class ProductsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    axios.get('/api')
      .then(result => this.setState({ products: result.data }));
  }
  onchange = e =>{
    this.setState({ search: e.target.value });
  }

  render() {
    const {search} = this.state;
    const filteredProducts = product.filter( product =>{
      return product.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1;
    });

    return (

      <section>
        <div className="col">
          <input label="Search" icon="search" onChange={this.onchange}/>
        </div>

        {this.state.products && this.state.filteredProducts.map(product => <ProductBox key={product._id} product={product}/>)}
      </section>
    );
  }
}
export default ProductsIndex;
