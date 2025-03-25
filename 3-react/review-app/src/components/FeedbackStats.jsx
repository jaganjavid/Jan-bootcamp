import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {


  const {feedback} = useContext(FeedbackContext);

  // const [count, setCount] = useState(0);


  // useEffect(() => {

  //   console.log("Hello");

  // }, [count]);
  
  return (
    <div className='stats'>
        <p>Total Feedback ({feedback.length})</p>

        {/* <button onClick={() => setCount(prev => prev + 1)}>Click</button>

        <span>{count}</span> */}
    </div>
  )
}

export default FeedbackStats