import { useState } from 'react';

const Navbar = () => {
  const category = [];

  const categories = [
    'technology',
    'business',
    'entertainment',
    'science',
    'sports',
    'health',
    'general',
  ];

  const setCategory = e => {
    const cat = e.target.value;
    console.log(cat);
  };

  for (const [index, value] of categories.entries()) {
    category.push(
      <button
        type='button'
        onClick={setCategory}
        className='btn btn-dark mr-3 text-capitalize'
        key={index}
        value={value}
      >
        {value}
      </button>
    );
  }

  return <div className='scrolling-container mb-4 py-3'>{category}</div>;
};

export default Navbar;
