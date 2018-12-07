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
    axios.get(`/api/product/${this.props.match.params.productId}`)
      .then(res => {
        this.setState({ product: res.data });
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
          </div>
        </div>
      </section>
    );
  }
}


export default ProductsShow;
