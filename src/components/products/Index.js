import React from 'react';
import axios from 'axios';
import ProductBox from './ProductBox';
import IndexSuggestion from './IndexSuggestion';
import { getHeader } from '../../lib/auth';
import { getSuggestion } from '../../lib/common';

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
      .then(result => this.setState({
        products: result.data,
        filteredProducts: result.data
      }, () => axios.get('/api/mypurchases', getHeader())
        .then(myPurchases => this.setState({
          myPurchases: myPurchases.data
        }, () => {
          this.setState({ suggestion: getSuggestion(myPurchases.data, result.data)});
        }))
      ));
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
      <section className="hero">
        <figure id="image">
          <img src="https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTczwPpf10BNAIpjg93OVBXieOlxLDUVdALKHvpC.iQYxhJ_MV4dWn12.v4JDpBEq98zwdFQu.VX8YiXAUipAMnZiclYvMLWJBmbkXmtgap7EoOhB4uOi.AKoKaNKf_HbkBKAGLvSNKDhGlxfTEgstMT1QntZQmtMbhK5WzjSV5lDs-&h=1080&w=1920&format=jpg"/>
        </figure>

        <div className="section">
          <div id="searchbox" className="box">
            <div className="field has-addons">
              <div className="control is-expanded">
                <input className="input has-text-centered" ref={input => this.search = input} onChange={this.handleSearch} type="search" placeholder="What are you looking for?"/>
              </div>
              <div className="control">
                <a className="button is-info">Search</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <IndexSuggestion suggestion={this.state.suggestion}/>
          {
            // this.state.suggestion &&

            // <div>Placeholder for featured items</div>
          }
        </div>
        <hr/>
        <div>
          <div className="columns is-multiline is-mobile">
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
