import React, { useEffect, useState } from 'react'

const TaskOne = () => {

    const [inputData, setInputData] = useState('')
    const [displayData, setDisplayData] = useState('')

    const handleInputData = (e) => {
        setInputData(e.target.value)
    }

    useEffect(() => {
        setDisplayData(inputData)
    },[inputData])

  return (
    <div>
          <h1>Task 01</h1>
      <input type='text' value={inputData} onChange={handleInputData} className='input' />
          <div>
              {displayData && <p>{displayData}</p>}
          </div>
    </div>
  )
}

export default TaskOne