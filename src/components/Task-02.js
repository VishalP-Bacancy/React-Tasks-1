import React, { useState } from 'react'
import './Tasks.css'

const TaskTwo = () => {

    const [inputData, setInputData] = useState('');
    const [displayData, setDisplayData] = useState('')

    const handleInputData = (e) => {
        setInputData(e.target.value)
    }

  const handleButtonClick = (e) => {
      e.preventDefault()
        setDisplayData(inputData)
    }

  return (
    <>
      <div>
        <h1>Task 02</h1>
        <div>
        <div className='task'>
             <input type='text' value={inputData} onChange={handleInputData} className='input'/>
             <button onClick={handleButtonClick} variant="primary" className='btn danger'>Submit</button>
          </div>
          <div  >
             {displayData && <p>{displayData}</p>}
          </div>
          </div>
    </div>
    </>
  )
}

export default TaskTwo