import React from 'react';

function Menu({ items, selectedCategory }) {
  return (
    <div className="menu">
      {items.map((item) => {
        const dataTestId =
          item.category === 'Breakfast'
            ? 'menu-item-breakfast'
            : item.category === 'Lunch'
            ? 'menu-item-lunch'
            : 'menu-item-shakes';

        return (
          <div
            key={item.id}
            data-test-id={dataTestId}
            className={`menu-item menu-item-${item.category.toLowerCase()}`}
            style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}
          >
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} width="150" />
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
