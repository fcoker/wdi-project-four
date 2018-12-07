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
  }

  componentDidMount() {
    axios.get('/api')
      .then(res => {
        const showPageProduct = res.data.find(product => product._id === this.props.match.params.productId);
        this.setState({
          product: showPageProduct,
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

  render() {
    const product = this.state.product;
    const suggested = this.state.suggested;
    const hasSuggestions = suggested && !!suggested.length;
    return (

      <section>
        {product
          ?
          <div>
            <article>
              <h3>{product.name}</h3>
              <h3>{product.price}</h3>
              <img id="image" src={product.images} />

              <div className="videoBox">
                <iframe width="300" height="200"src={product.video}>  </iframe>
              </div>

            </article>
          </div>

          :

          <p>Please wait...</p>}
        <div>
          <button className="button is-dark" onClick={this.handleDelete} >Delete</button>
          <Link to={`/product/${this.props.match.params.productId}/edit`}>
            <button className="button is-light has-text-centered edit">Edit</button>
          </Link>
          <div className="">
            <div className="">
              <label htmlFor="quantity" className="label">Quantity</label>
              <input className="input" type="number" min="1" name="quantity"
                value={this.state.quantity || 1} onChange={this.handleChange}/>
            </div>
            <div className="">
              <button className="button is-light" onClick={this.handleAddToCart}>Add to cart</button>
            </div>

            <div className="">
              {hasSuggestions
                ?
                <div>
                  <h3>You may also like:</h3>
                  {suggested.map(suggestion =>
                    <div key={suggestion._id}>
                      <p>{suggestion.name}</p>
                      <img src={suggestion.images[0]}/>
                    </div>)}
                </div>
                :
                <p>No similar items.</p>
              }
            </div>

          </div>
        </div>
      </section>
    );
  }
}


export default ProductsShow;
