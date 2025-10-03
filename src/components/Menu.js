import React from "react";

function Menu({ items, category }) {
  const filteredItems =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  return (
    <ul>
      {filteredItems.map(({ id, name, category, price, image }) => (
        <li
          key={id}
          data-test-id={`menu-item-${category.toLowerCase()}`}
          className={`menu-item-${category.toLowerCase()}`}
        >
          <h3>{name}</h3>
          <img src={image} alt={name} width="150" />
          <p>Category: {category}</p>
          <p>Price: ${price.toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
