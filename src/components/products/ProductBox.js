import React from 'react';
import { Link } from 'react-router-dom';

function ProductBox({ product }) {
  return (
    <div className="column is-4-desktop">
      <section className="section">
        <div className="container has-text-centered product-box">
          <div className="frames tile is-ancestor">
            <div className="tile is-parent">
              <Link to={`/product/${product._id}`}>
                <article className="square tile is-child box">
                  <div>
                    <p className="title">{product.name}</p>
                    <p className="subtitle">£{product.unitPrice}</p>
                  </div>
                  <figure className="image">
                    <img id="image" src={product.images[0]} />
                    <br/>
                    {(product.averageRating > 0)
                      ?
                      <p className="rating">{product.averageRating} <i className="fas fa-star"></i></p>
                      :
                      <p className="no-rating">Not rated yet</p>
                    }
                  </figure>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default ProductBox;
