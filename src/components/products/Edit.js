import React from 'react';
import axios from 'axios';
import { getHeader } from '../../lib/auth';


class ProductUpdate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      images: ['', '', '']
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){
    axios.get(`/api/product/${this.props.match.params.productId}`)
      .then(result=> {
        this.setState( result.data );
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('form subbmitted', this.state);
    axios.put(`/api/product/${this.props.match.params.productId}`, this.state, getHeader())
      .then(result => {
        console.log(result);
        this.props.history.push(`/product/${this.props.match.params.productId}`);
      });
  }

  // handleChange({ target: {name, value}}) {
  //   this.setState({ ...this.state, [name]: value });
  // }

  handleChange({ target: {name, value }}) {
    if(name.includes('images')) {
      const index = name[6] - 1;
      const newImages = this.state.images;
      newImages[index] = value;
      this.setState({ images: newImages });
    }
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Editing...</h3>
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
                      <input className="input " onChange={this.handleChange}  value={this.state.name || ''}  name="name" placeholder="Name"  />
                    </div>
                  </div>


                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.images || ''}  name="image"  placeholder="Image URL"/>
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
                      <input className="input" onChange={this.handleChange}   value={this.state.video || ''}  name="video"  placeholder="YouTube Video URL"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.unitPrice || ''}  name="unitPrice"  placeholder="Unit Price"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.description || ''}  name="description"  placeholder="Description"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" onChange={this.handleChange}   value={this.state.releaseDate || ''}  name="releaseDate"  placeholder="Release Date"/>
                    </div>
                  </div>
                  <button className="button is-dark">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}




export default ProductUpdate;
