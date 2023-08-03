

import React from 'react';

const ViewComponent = ({ items, onDeleteItem }) => {
  return (
    <ul className='viewChild'>
      {items.map((item, index) => (
        <li key={index}>
          {item} <button className='btn' onClick={() => onDeleteItem(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ViewComponent;
