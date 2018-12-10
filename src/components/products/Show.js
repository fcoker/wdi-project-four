import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addItem } from '../../lib/basket';

class ProductsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    axios.get('/api')
      .then(res => {
        const showPageProduct = res.data.find(product => product._id === this.props.match.params.productId);
        this.setState({
          product: showPageProduct,
          allProducts: res.data,
          suggested: res.data.filter(prod => prod.genre === showPageProduct.genre && prod !== showPageProduct)
        });
      });
  }

  handleAddToCart() {
    addItem(this.state.product, parseInt(this.state.quantity));
    this.props.history.push('/');
  }

  handleDelete(event){
    event.preventDefault();
    axios.delete(`/api/product/${this.state.product._id}`)
      .then(() => this.props.history.push('/'));
  }

  handleChange(e) {
    const { target: {name, value} } = e;
    this.setState({[name]: value});
  }

  handleRedirect(showPageProduct, products){
    this.props.history.push(`/product/${showPageProduct._id}`);
    this.setState({ product: showPageProduct, suggested: products.filter(prod => prod.genre === showPageProduct.genre && prod !== showPageProduct) });
  }

  render() {
    const product = this.state.product;
    const suggested = this.state.suggested;
    const hasSuggestions = suggested && !!suggested.length;
    return (

      <section id="showpage">
        {product
          ?
          <article>
            <div id="showblock" className="columns is-multiline">
              <div id="showpic" className="column is-6">
                <img id="imageshow" src={product.images} />
              </div>
              <div id="detailsShow" className="column is-3">
                <h3>{product.name}</h3>
                <h3>{product.unitPrice}</h3>
                <hr/>
                <h3>Genre: {product.genre}</h3>
                <h3>Format: {product.format}</h3>
                <h3>Released: {product.releaseDate}</h3>
                <hr/>
                <hr/>
                <h3>PLEASE NOTE: Prices in Stores may differ.</h3>
              </div>
              <div id="addtocart" className="column is-3">
                <label htmlFor="quantity" className="label">Quantity</label>
                <input className="input" type="number" min="1" name="quantity"
                  value={this.state.quantity || 1} onChange={this.handleChange}/>
                <button className="button is-light" onClick={this.handleAddToCart}>Add to cart  🛒</button>
              </div>




              <div className="columns is-multiline">
                <div id="videoblock" className="column is-12">
                  <p id="textshow"><strong>Synopsis: </strong>{product.description}</p>
                  <div>
                    <div className="column is-12 is-centered">
                      <iframe width="1130" height="600"src={product.video}>  </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          :

          <p>Please wait...</p>}
        <div>
          <button className="button is-dark" onClick={this.handleDelete} >Delete</button>
          <Link to={`/product/${this.props.match.params.productId}/edit`}>
            <button className="button is-light has-text-centered edit">Edit</button>
          </Link>
          <div className="">


            <div className="">
              { hasSuggestions
                &&
                    <div>
                      <h3>You may also like:</h3>
                      <div className="show-suggestion">
                        {suggested.map(suggestion =>
                          <div onClick={() => this.handleRedirect(suggestion, this.state.allProducts)} key={suggestion._id}>
                            <p>{suggestion.name}</p>
                            <img width="200px" src={suggestion.images[0]}/>
                          </div>)
                        }
                      </div>
                    </div>
              }
            </div>

          </div>
        </div>
      </section>
    );
  }
}


export default ProductsShow;
