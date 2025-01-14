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
import product19 from "./assets/images/newColl.jpg";
import product20 from "./assets/images/newColl2.jpg";
import product21 from "./assets/images/newColl3.jpg";
import Detail from "./Detail.js";
import Cart from "./Cart";


const sampleCollection = [
  { id: 1, name: "Golden Glow Collection", price: " 199.99Dh", image: product19 },
  { id: 2, name: "Ethereal Elegance", price: "299.99Dh", image: product20 },
  { id: 3, name: "Sparkling Horizons", price: "149.99Dh", image: product21 },
];

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [isCartAnimated, setCartAnimated] = useState(false);
  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exists, quantity: exists.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartAnimated(true);
    setTimeout(() => setCartAnimated(false), 1000);
  };

  const handleRemoveFromCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exists, quantity: exists.quantity - 1 }
            : item
        )
      );
    }
  };

 
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { picture: product1, title: "Silver long necklace", price: "200Dh" },
    { picture: product2, title: "Massive silver earrings", price: "100Dh" },
    { picture: product3, title: "Classy square earrings", price: "150Dh" },
    { picture: product4, title: "Collection ring simple", price: "250Dh" },
    { picture: product5, title: "Simple golden rounded braclete", price: "300Dh" },
    { picture: product6, title: "Yellow gold square bracelet", price: "400Dh" },
    { picture: product7, title: "Classy square earrings gold", price: "110Dh" },
    { picture: product16, title: "Silver ring with gold vermeil", price: "300Dh" },
    { picture: product8, title: "Elegant silver minimalist chain ring bracelet", price: "420Dh" },
    { picture: product9, title: "Earrings with rose gold finish", price: "100Dh" },
    { picture: product10, title: "Neckline with rose gold", price: "150Dh" },
    { picture: product14, title: "Elegant classy rose gold earrings", price: "110Dh" },
    { picture: product11, title: "Rose gold ring simple design", price: "200Dh" },
    { picture: product12, title: "Silver rhodium tone ring chain bracelet", price: "400Dh" },
    { picture: product13, title: "Silver ring with rhodium", price: "130Dh" },
    { picture: product15, title: "Silver base and rose or yellow gold lining.", price: "480Dh" },
    { picture: product17, title: "Square golden earrings", price: "240Dh" },
    { picture: product18, title: "Elegent golden necklace", price: "400Dh" },


  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Header setSearchQuery={setSearchQuery} isCartAnimated={isCartAnimated}  />
      <Cart
        cartItems={cartItems}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
      />
      <Routes>
        {/* Home Route */}
        <Route path="/detail/:id" element={<Detail products={products} onAddToCart={handleAddToCart} />} />
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
              {/* Pass the filtered products to the Jewelry component */}
              <Jewelry items={filteredProducts} />
            </div>
          }
        />
        <Route
          path="/detail/:id"
          element={<Detail products={products} />}
        />

        {/* Other Routes */}
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-collection" element={<NewCollection collection={sampleCollection} />} />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
