import React from 'react';
import { Link } from 'react-router-dom';

function ProductBox({ product }) {
  return (
    <Link to={`/product/${product._id}`}>
      <article>
        <h3>{product.name}</h3>
        <h3>{product.price}</h3>
        <img id="image" src={product.images} />
      </article>
    </Link>
  );
}

export default ProductBox;
