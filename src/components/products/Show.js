import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




class ProductsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/product/${this.props.match.params.productId}`)
      .then(res => {
        this.setState({ product: res.data });
      });
  }

  handleDelete(event){
    event.preventDefault();
    axios.delete(`/api/product/${this.state.product._id}`)
      .then( () => this.props.history.push('/'));
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
            </article>
          </div>

          :

          <p>Please wait...</p>}
        <div>
          <button className="button is-dark" onClick={this.handleDelete} >Delete</button>
          <Link to={`/${this.props.match.params.id}/edit`}>
            <button className="button is-light has-text-centered edit">Edit</button>
          </Link>
          <Link to={`/${this.props.match.params.id}/basket`}>
            <button className="button is-light">Add to Cart</button>
          </Link>
        </div>
      </section>
    );
  }
}


export default ProductsShow;
