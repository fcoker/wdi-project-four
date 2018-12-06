import React from 'react';
import axios from 'axios';
import { getToken } from '../../lib/auth';

class ProductNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('form subbmitted', this.state);
    axios.post('/api/products', this.state, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
      .then(result => {
        console.log(result);
        this.props.history.push(`/products/${result.data._id}`);
      });
  }

  handleChange({ target: {name, value }}) {
    console.log('this is name', { [name]: value });
    console.log('event.target.name is', event.target.name, this.state);
    this.setState({ [name]: value });
  }

  render() {
    return(
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Adding...</h3>
              <div className="box">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <input className="input " onChange={this.handleChange}  value={this.state.products.name || ''}  name="name" placeholder="name"  />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.products.format || ''}  name="format"  placeholder="format"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.product.genre || ''}  name="genre"  placeholder="genre"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.products.image || ''}  name="image"  placeholder="imageUrl"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.products.video || ''}  name="video"  placeholder="video"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.products.price || ''}  name="price"  placeholder="price"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.products.description || ''}  name="description"  placeholder="description"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.products.releaseDate || ''}  name="releaseDate"  placeholder="releaseDate"/>
                    </div>
                  </div>
                  <button className="button is-primary">Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default ProductNew;
