import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header.js'
import Landing from "./landing.js";
import ProductsSection from "./ProductsSection.js";
import ProductsCards from "./ProductsCards.js";
import Jewelry from "./Jewelry.js";
import OurStory from "./OurStory.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Cart from "./Cart.js";
import NewCollection from "./NewCollection.js";
import product1 from "./assets/images/pendant-for-neckline.jpg";
import product2 from "./assets/images/silver-earrings.jpg";
import product3 from "./assets/images/gold-earrings-cube-gold.jpg";
import product4 from "./assets/images/bracelet-1000x1000.jpg";
import product5 from "./assets/images/2.jpg";
import product6 from "./assets/images/gold-bracelet-cube.jpg";
import product7 from "./assets/images/gold-earrings.jpg";
import product8 from "./assets/images/gold-ring-bracelet.jpg";
import product9 from "./assets/images/rosegold-earrings-simple.jpg";
import product10 from "./assets/images/rosegold-neckline.jpg";
import product11 from "./assets/images/rosegold-ring.jpg";
import product12 from "./assets/images/silver-ring-bracelet.jpg";
import product13 from "./assets/images/silver-ring.jpg";
import product14 from "./assets/images/earrings-1000x1000.jpg";
import product15 from "./assets/images/1.jpg";
import product16 from "./assets/images/ring-dream-natifi.jpg";
import product17 from "./assets/images/ringg.jpg";
import product18 from "./assets/images/chic.jpg";
import Detail from "./Detail.js";
import Payment from "./PaymentForm.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51Qs2ttKvFc0uzcykX3nuvdN0cB6NOlyRLZELSVDq81BenDrTGbLCCbgdxtVth7Cga2Kkom6rlSLcqWat6Hv26CiG00OW9PFtk0");
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.title === product.title);
      if (existingItem) {
        return prevCart.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const updateQuantity = (id, action) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };


  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { picture: product1, title: "Silver long necklace", price: 200 },
    { picture: product2, title: "Massive silver earrings", price: 100 },
    { picture: product3, title: "Classy square earrings", price: 150 },
    { picture: product4, title: "Collection ring simple", price: 250 },
    { picture: product5, title: "Simple golden rounded braclete", price: 300 },
    { picture: product6, title: "Yellow gold square bracelet", price: 400 },
    { picture: product7, title: "Classy square earrings gold", price: 110 },
    { picture: product16, title: "Silver ring with gold vermeil", price: 300 },
    { picture: product8, title: "Elegant silver minimalist chain ring bracelet", price: 420 },
    { picture: product9, title: "Earrings with rose gold finish", price: 100 },
    { picture: product10, title: "Neckline with rose gold", price: 150 },
    { picture: product14, title: "Elegant classy rose gold earrings", price: 110 },
    { picture: product11, title: "Rose gold ring simple design", price: 200 },
    { picture: product12, title: "Silver rhodium tone ring chain bracelet", price: 400 },
    { picture: product13, title: "Silver ring with rhodium", price: 130 },
    { picture: product15, title: "Silver base and rose or yellow gold lining.", price: 480 },
    { picture: product17, title: "Square golden earrings", price: 240 },
    { picture: product18, title: "Elegent golden necklace", price: 400 },

  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Header setSearchQuery={setSearchQuery} cartItems={cart} />

      <Routes>
        {/* Home Route */}
        <Route path="/detail/:id" element={<Detail products={products} addToCart={addToCart}/>} />
        <Route
          path="/"
          element={
            <>
              <Landing />

              <ProductsSection />
              <ProductsCards 
                products={[
                  { image: product1, description: " silver long necklace", price: "240.00 Dh" },
                  { image: product2, description: "Massive silver earrings", price: "165.00 Dh" },
                  { image: product3, description: "Classy square earrings", price: "200.00 Dh" },
                  { image: product4, description: "Collection ring simple", price: "100.00 Dh" },
                ]}

              />
              <OurStory />
              <Contact />
            </>
          }
        />
        {/* Jewelry Route */}
        <Route
          path="/jewelry"
          element={
            <div className="container py-2">
              <Jewelry items={filteredProducts} />
            </div>
          }
        />
        <Route path="/jewelry/:id" element={<Detail />} />
        <Route
          path="/detail/:id"
          element={<Detail products={products} />}
        />
        
        {/* Other Routes */}
        <Route path="/our-story" element={<OurStory />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
        <Route path="/new-collection" element={<NewCollection  />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
