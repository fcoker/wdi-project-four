import React from 'react';
import { Link } from 'react-router-dom';

function ProductBox({ product }) {
  return (
    <section className="column is-4-desktop">
      <Link to={`/product/${product._id}`}>

        <div  >
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title">{product.name}</p>
                <p className="subtitle">£{product.unitPrice}</p>
                <figure>
                  <img id="imagebox" src={product.images} />
                </figure>
              </article>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default ProductBox;
