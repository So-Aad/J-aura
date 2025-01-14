import React from "react";
import "./NewCollection.css"; // Link your custom CSS for fancy styling

const NewCollection = ({ collection }) => {
  return (
    <div className="new-collection-section">
      {/* Hero Banner */}
      <div className="hero-banner">
      <p className="shop-now">Why Buy One When You Can Have It All? Shop the Pack Now!</p>
        <h1 className="hero-title">Discover Our New Collections</h1>
        <p className="hero-subtitle">
          Elegance redefined. Shop the latest trends in jewelry and shine like never before.
        </p>
       
      </div>

      {/* Collection Grid */}
      <div className="collection-grid">
        {collection.map((item) => (
          <div className="collection-item" key={item.id}>
            <div className="image-container">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="overlay">
                <button className="view-details-button">View Details</button>
              </div>
            </div>
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price text-center">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
