import React, { useState } from "react";
import Menu from "./Menu";

const menuItems = [
  {
    id: 1,
    name: "Pancakes",
    category: "Breakfast",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Eggs Benedict",
    category: "Breakfast",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb22?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Burger",
    category: "Lunch",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Caesar Salad",
    category: "Lunch",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1556910103-1ec8a4e7e9c8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Strawberry Shake",
    category: "Shakes",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Chocolate Shake",
    category: "Shakes",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div id="main">
      <h1>Menu</h1>
      <div>
        <button
          id="filter-btn-1"
          onClick={() => setSelectedCategory("Breakfast")}
        >
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => setSelectedCategory("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => setSelectedCategory("Shakes")}>
          Shakes
        </button>
      </div>
      <Menu items={menuItems} category={selectedCategory} />
    </div>
  );
}

export default App;
