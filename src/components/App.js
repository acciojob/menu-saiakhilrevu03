import React, { useState } from 'react';

const menuItems = [
  {
    id: 1,
    name: 'Pancakes',
    category: 'Breakfast',
    price: '$5',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Burger',
    category: 'Lunch',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Chocolate Shake',
    category: 'Shakes',
    price: '$7',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Omelette',
    category: 'Breakfast',
    price: '$6',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Grilled Cheese',
    category: 'Lunch',
    price: '$8',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Vanilla Shake',
    category: 'Shakes',
    price: '$6',
    image: 'https://via.placeholder.com/150',
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div id="main">
      <h1>Menu</h1>
      <div>
        <button id="filter-btn-1" onClick={() => setSelectedCategory('Breakfast')}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => setSelectedCategory('Lunch')}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => setSelectedCategory('Shakes')}>
          Shakes
        </button>
      </div>

      <div className="menu">
        {filteredItems.map(({ id, name, category, price, image }) => (
          <div
            key={id}
            data-test-id={`menu-item-${category.toLowerCase()}`}
            className={`menu-item menu-item-${category.toLowerCase()}`}
            style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}
          >
            <h3>{name}</h3>
            <img src={image} alt={name} width={150} />
            <p>Price: {price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

