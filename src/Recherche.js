import React, { useState } from "react";
import Header from "./Header";
import Jewelry from "./Jewelry";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const jewelryItems = [
    { title: "Diamond Ring", picture: "diamond.jpg", price: "$500" },
    { title: "Gold Necklace", picture: "gold.jpg", price: "$300" },
    { title: "Silver Earrings", picture: "silver.jpg", price: "$200" },
    // Add more items here
  ];

  const filteredItems = jewelryItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <div className="container">
        <Jewelry items={filteredItems} />
      </div>
    </>
  );
}

export default App;
