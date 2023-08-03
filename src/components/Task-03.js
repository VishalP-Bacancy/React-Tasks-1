import React, { useState } from 'react'
import './Tasks.css'


const TaskThree = () => {
  const [inputData, setInputData] = useState('');
    const [displayData, setDisplayData] = useState([])

    const handleInputData = (e) => {
        setInputData(e.target.value)
    }

  const handleButtonClick = (e) => {
      e.preventDefault()
    setDisplayData([...displayData, inputData])
    setInputData('')
    }

  return (
    <div>
        <h1>Task 03</h1>
      <div clasName='task'>
       <div>
             <input type='text' value={inputData} onChange={handleInputData} className='input' />
             <button disabled={!inputData} onClick={handleButtonClick} className='btn'>Submit</button>
          </div>
          <div>
             <ul>
                {displayData.map((data, index) => {
                  return (
                    <li>
                      <p key={index}>{data}</p>
                    </li>
                  )
                })}
             </ul>
          </div>
          </div>
    </div>
  )
}

export default TaskThree