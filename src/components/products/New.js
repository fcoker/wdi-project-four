import React from 'react';
import axios from 'axios';
import { getHeader } from '../../lib/auth';

class ProductNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: ['', '', '']
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('form subbmitted', this.state);
    axios.post('/api/', this.state, getHeader())
      .then(result => {
        console.log(result);
        this.props.history.push(`/product/${result.data._id}`);
      });
  }

  handleChange({ target: {name, value }}) {
    if(name.includes('images')) {
      const index = name[6] - 1;
      const newImages = this.state.images;
      newImages.splice(index, 1, value);
      this.setState({ images: newImages });
    }
    this.setState({ [name]: value });
  }

  render() {
    return(
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Adding...</h3>
              <div className="box">
                <form onSubmit={this.handleSubmit}>

                  <div className="field">
                    <div className="control">
                      <select name="format" onChange={this.handleChange} selected={this.state.format || ''}>
                        <option>Select Format</option>
                        <option value="PS4">PS4</option>
                        <option value="XBOX">XBOX</option>
                        <option value="Movie">Movie</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <select name="genre" onChange={this.handleChange} selected={this.state.genre || ''}>
                        <option>Select Genre</option>
                        <option value="RPG">RPG</option>
                        <option value="racing">racing</option>
                        <option value="shooter">shooter</option>
                        <option value="drama">drama</option>
                        <option value="adventure">adventure</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input " onChange={this.handleChange}  value={this.state.name || ''}  name="name" placeholder="name"  />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.images[0] || ['']}  name="images1"  placeholder="main imageUrl"/>
                      <input className="input" onChange={this.handleChange}   value={this.state.images[1] || ['']}  name="images2"  placeholder="imageUrl 2"/>
                      <input className="input" onChange={this.handleChange}   value={this.state.images[2] || ['']}  name="images3"  placeholder="imageUrl 3"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.video || ''}  name="video"  placeholder="video"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.unitPrice || ''}  name="unitPrice"  placeholder="price"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.description || ''}  name="description"  placeholder="description"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.releaseDate || ''}  name="releaseDate"  placeholder="releaseDate"/>
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
