import React from 'react';
import { Link } from 'react-router-dom';

function ProductBox({ product }) {
  return (
    <Link to={`/product/${product._id}`}>
      <section className="section">
        <div className="container has-text-centered">
          <div className="tile is-ancestor">
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
  );
}

export default ProductBox;
