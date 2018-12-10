import React from 'react';
import { Link } from 'react-router-dom';

function ProductBox({ product }) {
  return (
    <div className="column is-3-desktop">

      <Link to={`/product/${product._id}`}>
        <section className="section">
          <div className="container has-text-centered">
            <div id="frames" className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">{product.name}</p>
                  <p className="subtitle">{product.unitPrice}</p>
                  <figure className="image">
                    <img id="image" src={product.images} />
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </section>
      </Link>
    </div>

  );
}

export default ProductBox;
