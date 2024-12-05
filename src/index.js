import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './landing.js';
import reportWebVitals from './reportWebVitals';
import ProductsSection from './ProductsSection.js';
import ProductsCards from './ProductsCards.js';
import product1 from './assets/images/pendant-for-neckline.jpg';
import product2 from './assets/images/silver-earrings.jpg';
import product3 from './assets/images/gold-earrings-cube-gold.jpg';
import product4 from './assets/images/bracelet-1000x1000.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
    <ProductsSection/>
    <ProductsCards products={[
    { image: product1, description: "Sterling silver long  necklace ", price: "240.00 Dh" },
    { image: product2, description: "Massive silver earrings ", price: "165.00 Dh" },
    { image: product3, description: "classy square earrings", price: "200.00 Dh" },
    { image: product4, description: "Collection ring simple ", price: "100.00 Dh" },
    
]} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
