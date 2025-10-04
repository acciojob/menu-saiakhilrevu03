import React, { useState } from 'react';
import Menu from './Menu';

const menuData = [
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
  const [category, setCategory] = useState('All');

  // Filter items based on selected category
  const filteredMenu = category === 'All'
    ? menuData
    : menuData.filter(item => item.category === category);

  return (
    <div id="main">
      <h1>Menu</h1>
      <div>
        <button id="filter-btn-1" onClick={() => setCategory('Breakfast')}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => setCategory('Lunch')}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => setCategory('Shakes')}>
          Shakes
        </button>
      </div>
      <Menu items={filteredMenu} selectedCategory={category} />
    </div>
  );
}

export default App;
