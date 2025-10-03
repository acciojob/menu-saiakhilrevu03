import React from "react";

export default function Menu({ menuItems }) {
  return (
    <div className="menu-list">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <span className="category">{item.category}</span>
        </div>
      ))}
    </div>
  );
}
