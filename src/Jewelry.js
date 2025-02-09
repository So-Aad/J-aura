import React from "react";
import "./Jewelry.css";
import photoC from "./assets/images/newColl2.jpg";
import { Link } from "react-router-dom";
function Jewelry({ items }) {
  return (
    <div className="row">
      {items.map((item, index) => (
        <div className="col menu-item" key={index} >
          <div className="card border-0 text-start" style={{ width: "13rem" }}>
            <div className="cardD">
              <Link  to={`/detail/${index}`}>
              <img src={item.picture} className="jewelry-img  " alt={item.title} />
             </Link>
            </div>
            <div className="card-body">
              <p className="product-titleZ">{item.title}</p>
              <p className="product-priceZ">{item.price}</p>
              <p className="details">{item.details}</p>
            </div>
          </div>

        </div>
      ))}
      <div className="pic" style={{ backgroundImage: `url(${photoC})`, }}>
        <a href="/new-collection"><span>J-aura</span>New Collections </a>
      </div>
    </div>

  );
}

export default Jewelry;
