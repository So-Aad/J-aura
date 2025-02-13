import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Detail({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((_, index) => index === parseInt(id, 10));

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); // Redirect to Cart page
  };

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
        <p className="detail-availability"><strong>Availability:</strong> In stock</p>
        <p className="detail-price">Price: {product.price}</p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Detail;
