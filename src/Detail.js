import React from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

function Detail({ products, onAddToCart }) {
  const { id } = useParams();
  const product = products.find((product, index) => index === parseInt(id, 10));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="detail-container">
      <div className="detail-images">
        <img src={product.picture} alt={product.title} className="detail-img" />
      </div>
      <div className="detail-info">
        <h2 className="detail-title">{product.title}</h2>
        <p className="detail-description">
          <strong>Detailed Product Description:</strong>
          <br />
          The gentle feminine beauty and charm of the movements celebrate the infinite perfection of nature and its superiority.
        </p>
        <p className="detail-availability">
          <strong>Availability:</strong> In stock
        </p>
        <p className="detail-price">Price: {product.price}</p>
        <button className="add-to-cart" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Detail;
