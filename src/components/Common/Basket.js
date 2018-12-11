import React from 'react';
import basketLib from '../../lib/basket';
import { handleChange } from '../../lib/common';

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.checkout = basketLib.checkout.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = handleChange.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
    this.handlePlusClick = this.handlePlusClick.bind(this);
  }

  componentDidMount() {
    this.setState({ basket: basketLib.getBasket()});
  }

  handleDelete(itemId) {
    basketLib.removeItem(itemId);
    this.setState({ basket: basketLib.getBasket()});
  }

  handlePlusClick(item) {
    basketLib.incrementQuantity(basketLib.getBasket(), item._id, 1);
    this.setState({ basket: basketLib.getBasket() });
    basketLib.totalBasketPrice();
  }

  handleMinusClick(item) {
    basketLib.decrementQuantity(basketLib.getBasket(), item._id, 1);
    this.setState({ basket: basketLib.getBasket() });
  }


  render() {
    const basket = this.state.basket;
    const hasItems = basket && !!basket.length;

    return (
      <main>
        <div className="section is-small">
          <section id="basket" className="hero">
            <h1>Products in your basket</h1>

            {basket && hasItems ? basket.map(item =>

              <div key={item._id} className="columns">

                <div className="column is-4">
                  <figure className="image">
                    <p id="basketname">{item.name}</p>
                    <img id="imagebasket" src={item.images[0]} />
                  </figure>
                </div>

                <div className="column is-1">
                  <div>
                    <span onClick={() => this.handleMinusClick(item)}> ➖ </span>
                    <span>{item.unitQuantity}</span>
                    <span onClick={() => this.handlePlusClick(item)}> ➕ </span>
                  </div>
                </div>

                <div className="column is-1">
                  <a className="delete" onClick={() => this.handleDelete(item._id)}></a>
                </div>

                <div className="column is-6">
                  <p>£{item.unitPrice}</p>
                </div>

              </div>
            )
              :
              <p>No items</p>}

            {basket && hasItems &&
          <div className="columns">
            <div className="column">
              <button className="button" onClick={() => this.setState({ basket: basketLib.createBasket() })}>Clear basket</button>
            </div>
            <div className="column">
              <p className="column">Total price: £{basketLib.totalBasketPrice()}</p>
            </div>
            <div className="column">
              <button className="button is-success" onClick={this.checkout}>Check out</button>
            </div>
          </div>
            }
          </section>
        </div>
      </main>
    );
  }
}

export default Basket;
