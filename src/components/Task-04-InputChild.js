import React, { useState } from 'react';
import './Tasks.css'


const InputComponent = ({ onAddItem, onDeleteAll  }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      onAddItem(inputValue);
      setInputValue('');
    }
    };
    
  const deleteAllHandler = () => {
    onDeleteAll ()
  }

  return (
    <div className='task'>
      <input type="text" value={inputValue} onChange={handleChange} className='input input-4' />
      <button onClick={handleAddItem} disabled={!inputValue.trim()} className='btn'>Add</button>
      <button onClick={deleteAllHandler} className='btn'>Delete All</button>
    </div>
  );
};

export default InputComponent;



