import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { getHeader } from '../../lib/auth';
// import { getSuggestion } from '../../lib/common';

function IndexSuggestion({suggestion}) {
  return (
    <section className="container" height="200px">
      {suggestion &&
        <div>
          <div>
            <Link className="columns is-centered" to={`/product/${suggestion._id}`}>
              <div className="column is-10 index-suggestion">
                <iframe src={suggestion.video}></iframe>
                <h1 className="is-pulled-left"><b>Featured:</b> {suggestion.name}</h1>
              </div>
            </Link>
          </div>
        </div>
        // <img width="100px" src={suggestion.images[0]}/>
      }
    </section>
  );

  // const prod = getSuggestion(myPurchases, products);
  // console.log('inside the IndexSuggestion products is:', products);
  // console.log('inside the IndexSuggestion myPurchases is:', myPurchases);
  // console.log('inside the IndexSuggestion product is:', getSuggestion(myPurchases, products));
  // setSuggestion(prod);
  // class IndexSuggestion extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  // componentDidMount() {
  //   axios.get('/api/mypurchases', getHeader())
  //     .then(result => this.setState({
  //       myPurchases: result.data,
  //       //sometimes this isn't happening fast enough,
  //       //so no products are show as suggestions:
  //       suggestion: this.props.suggestion
  //     }));
  // }

  // render(){
  // const products = this.props.products;
  // const suggestion = this.state.suggestion;

}

export default IndexSuggestion;
