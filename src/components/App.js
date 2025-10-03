import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css"; 

const dishes = [
  { id: 1, name: "Pancakes", category: "Breakfast", price: "$5", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Omelette", category: "Breakfast", price: "$4", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Burger", category: "Lunch", price: "$8", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Pizza", category: "Lunch", price: "$10", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Strawberry Shake", category: "Shakes", price: "$6", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Chocolate Shake", category: "Shakes", price: "$7", img: "https://via.placeholder.com/100" },
];

export default function App() {
  const [menuItems, setMenuItems] = useState(dishes);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterMenu = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setMenuItems(dishes);
    } else {
      setMenuItems(dishes.filter((dish) => dish.category === category));
    }
  };

  return (
    <div id="main" className="container">
      <h1 className="title">Menu Application</h1>
      <div className="btn-group">
        <button id="filter-btn-1" onClick={() => filterMenu("Breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => filterMenu("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => filterMenu("Shakes")}>
          Shakes
        </button>
        <button id="filter-btn-all" onClick={() => filterMenu("All")}>
          All
        </button>
      </div>
      <Menu menuItems={menuItems} />
    </div>
  );
}
