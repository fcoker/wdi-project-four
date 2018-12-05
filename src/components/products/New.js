import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';


export default class ProductNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submit handled', this.state);
    axios.post('/', this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return(
      <section>
        <h2 className="title is-2">Adding A New Product</h2>
      </section>
    );
  }
}
