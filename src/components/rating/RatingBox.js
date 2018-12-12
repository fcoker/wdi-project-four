import React  from 'react';
import axios from 'axios';
import { getHeader } from '../../lib/auth';

class RatingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.props);
    axios.post(`/api/product/${this.props.product._id}/reviews`, this.state, getHeader())
      .then(() => {
        this.setState({ rated: true });
        this.props.renderShowPage();
      });
  }

  handleChange({ target: { name, value }}) {
    console.log(event.target);
    this.setState({ [name]: value });
    // setTimeout(this.handleSubmit(event), 500);
  }

  render() {
    return (
      <section className="columns">
        <div className="column is-12 star-box">
          <div className="stars">
            <form onSubmit={this.handleSubmit}>
              <div>
                <input className="star star-5" value="5" id="star-5" onChange={this.handleChange} type="radio" name="ratingValue"/>
                <label className="star star-5" htmlFor="star-5"></label>
                <input className="star star-4" value="4" id="star-4" onChange={this.handleChange} type="radio" name="ratingValue"/>
                <label className="star star-4" htmlFor="star-4"></label>
                <input className="star star-3" value="3" id="star-3" onChange={this.handleChange} type="radio" name="ratingValue"/>
                <label className="star star-3" htmlFor="star-3"></label>
                <input className="star star-2" value="2" id="star-2" onChange={this.handleChange} type="radio" name="ratingValue"/>
                <label className="star star-2" htmlFor="star-2"></label>
                <input className="star star-1" value="1" id="star-1" onChange={this.handleChange} type="radio" name="ratingValue"/>
                <label className="star star-1" htmlFor="star-1"></label>
              </div>
              <div>
                <button className="button">Rate</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default RatingBox;
