import React, { useState } from 'react';
import InputComponent from './Task-04-InputChild';
import ViewComponent from './Task-04-ViewChild';

const ParentComponent = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    };
    
    const deleteAll = () => {
        setItems([])
    }

  return (
    <div>
      <h1 id='task-04'>Task-04</h1>
      <InputComponent onAddItem={addItem} onDeleteAll={deleteAll}/>
      <ViewComponent items={items} onDeleteItem={deleteItem} className='viewChild'/>
    </div>
  );
};

export default ParentComponent;

