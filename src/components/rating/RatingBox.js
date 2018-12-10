import React  from 'react';
import axios from 'axios';
import { getHeader } from '../../lib/auth';

class RatingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createRatingScale = this.createRatingScale.bind(this);
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
    this.setState({ [name]: value }, ()=> console.log(this.state));
  }

  createRatingScale(){
    const scale = [];
    for(let i = 1; i <= 10; i++){
      scale.push(i);
    }
    return scale;
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="box">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <div className="control">
                {
                  this.createRatingScale().map(num =>
                    <label key={num}>
                      <input type="radio" value={num} name="ratingValue" onChange={this.handleChange} />
                    </label>
                  )
                }
              </div>
              <div className="control">
                {
                  this.createRatingScale().map(num =>
                    <span key={num}>{num}</span>
                  )
                }
              </div>
            </div>
            <button className="button">Submit rating</button>
          </form>
        </div>
      </section>
    );
  }
}

export default RatingBox;
