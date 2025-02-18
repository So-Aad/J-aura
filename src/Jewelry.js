import React from "react";
import "./Jewelry.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Jewelry({ items }) {
  return (
    <div className="row justify-content-center">
      {items.map((item, index) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
          <div className="card border-0 text-start h-100">
            <div className="cardD">
              <Link to={`/detail/${index}`}>
                <img src={item.picture} className="jewelry-img" alt={item.title} />
              </Link>
            </div>
            <div className="card-body d-flex flex-column">
              <p className="product-titleZ">{item.title}</p>
              <p className="product-priceZ">{item.price}Dh</p>
              <p className="details">{item.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jewelry;
