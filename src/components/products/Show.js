import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addItem } from '../../lib/basket';
import { isAuthenticated, isAdmin } from '../../lib/auth';
import RatingBox from '../rating/RatingBox';
import Slider from './showSlider/Slider';

class ProductsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.renderShowPage = this.renderShowPage.bind(this);
    // this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    axios.get('/api/')
      .then(res => {
        const showPageProduct = res.data.find(product => product._id === this.props.match.params.productId);
        this.setState({
          product: showPageProduct,
          allProducts: res.data,
          suggested: res.data.filter(prod => prod.genre === showPageProduct.genre && prod !== showPageProduct)
        });
      });
  }

  componentDidUpdate(prevProps){
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.renderShowPage();
    }
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

  renderShowPage(){
    axios.get('/api')
      .then(res => {
        window.scrollTo(0, 0);
        const showPageProduct = res.data.find(product => product._id === this.props.match.params.productId);
        this.setState({
          product: showPageProduct,
          allProducts: res.data,
          suggested: res.data.filter(prod => prod.genre === showPageProduct.genre && prod !== showPageProduct)
        });
      });
  }


  // handleRedirect(showPageProduct, products){
  //   this.props.history.push(`/product/${showPageProduct._id}`);
  //   // this.setState({ product: showPageProduct, suggested: products.filter(prod => prod.genre === showPageProduct.genre && prod !== showPageProduct) });
  // }

  render() {
    const product = this.state.product;
    const suggested = this.state.suggested;
    const hasSuggestions = suggested && !!suggested.length;
    return (

      <section className="showpage">
        {product
          ?
          <article className="showblock">
            <div className="columns is-multiline">
              <div className="column is-5">
                <Slider renderShowPage={this.renderShowPage} images={product.images} />
              </div>

              <div className="detailsShow column is-4">
                <p className="title">{product.name}
                  {(product.averageRating > 0) &&
                    <span className="is-pulled-right">
                      <p>{product.averageRating} <i className="fas fa-star"></i></p>
                    </span>
                  }
                </p>
                <hr/>
                <h3 id="price">Price: <strong>£{product.unitPrice}</strong></h3>
                <h3>Genre: <strong>{product.genre}</strong></h3>
                <h3>Format: <strong>{product.format}</strong></h3>
                <h3>Released: <strong>{product.releaseDate}</strong></h3>
                <h4><strong>BARCODE: </strong>{product._id}</h4>
                <hr/>

                <h4><span id="red">PLEASE NOTE: </span>Prices in P&W Stores may differ.</h4>

                <br/>
                {isAuthenticated() && <RatingBox renderShowPage={this.renderShowPage} product={this.state.product}/>}

              </div>

              <div className="cart-column column is-3 has-text-centered">
                {isAdmin() &&
                  <div className="admin-buttons has-content-centered">
                    <button className="button is-dark delete-button" onClick={this.handleDelete}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                    <Link to={`/product/${this.props.match.params.productId}/edit`}>
                      <button className="button is-light has-text-centered edit">
                        <i className="fas fa-edit"></i>
                      </button>
                    </Link>
                  </div>
                }
                {isAuthenticated() &&
                <div className="add-to-cart">
                  <div>
                    <strong>Quantity: </strong>
                    <input id="inputshow" className="input" type="number" min="1" name="quantity"
                      value={this.state.quantity || 1} onChange={this.handleChange}/>
                  </div>
                  <div>
                    <br />
                    <button className="button is-link" onClick={this.handleAddToCart}>Add to basket ▶︎</button>
                  </div>
                </div>
                }
              </div>




              <div className="columns is-multiline">
                <div id="videoblock" className="column is-12">
                  <p id="textshow"><strong>Synopsis: </strong>{product.description}</p>
                  <div>
                    <div className="column is-12">
                      <iframe width="1110" height="600"src={product.video}></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          :

          <p>Please wait...</p>}
        <div>





          <div className="">
            { hasSuggestions
                &&
                <div>
                  <h3>You may also like:</h3>
                  <div className="show-suggestion columns">

                    {suggested.map(suggestion =>
                      //<div onClick={() => this.handleRedirect(suggestion, this.state.allProducts)} key={suggestion._id}>
                      <div className="column is-4" key={suggestion._id}>
                        <Link to={`/product/${suggestion._id}`}>
                          <p>{suggestion.name}</p>
                          <img height="200px" src={suggestion.images[0]}/>
                        </Link>
                      </div>)
                    }
                  </div>
                </div>
            }
          </div>

        </div>


      </section>
    );
  }
}


export default ProductsShow;
