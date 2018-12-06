import React from 'react';
import axios from 'axios';




class ProductsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ products: res.data });
      });
  }

  handleDelete(event){
    event.preventDefault();
    axios.delete(`/api/products/${this.state.products._id}`)
      .then( () => this.props.history.push('/products/'));
  }

  render() {
    const products = this.state.products;
    return (
      <section>
        {products
          ?
          <div>
            <article>
              <h3>{products.name}</h3>
              <img  src={products.image} />
            </article>
          </div>

          :

          <p>Please wait...</p>}
        <div>
          <button id="delete" className="button is-dark" onClick={this.handleDelete} >Delete</button>
          <button id="edit" className="button is-light">Add to Cart</button>
        </div>
      </section>
    );
  }
}


export default ProductsShow;
