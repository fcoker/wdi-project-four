import React from 'react';
import axios from 'axios';
import { getHeader } from '../../lib/auth';
import { getSuggestion } from '../../lib/common';
import { Link } from 'react-router-dom';

class IndexSuggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/mypurchases', getHeader())
      .then(result => this.setState({
        myPurchases: result.data,
        //sometimes this isn't happening fast enough,
        //so no products are show as suggestions:
        suggestion: getSuggestion(result.data, this.props.products)
      }));
  }

  render(){
    // const products = this.props.products;
    // const suggestion = this.state.suggestion;
    return (
      <section className="container" height="200px">
        {!!this.state.suggestion && !!this.props.products &&
          <div>
            <h1>Featured:</h1>
            <div>
              <Link to={`/product/${this.state.suggestion._id}`}>
                <img width="100px" src={this.state.suggestion.images[0]}/>
                <p>{this.state.suggestion.name}</p>
              </Link>
            </div>
          </div>
        }
      </section>
    );
  }
}

export default IndexSuggestion;
