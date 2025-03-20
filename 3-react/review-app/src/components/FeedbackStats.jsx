import React from 'react'

const FeedbackStats = ({feedback}) => {
  return (
    <div className='stats'>
        <p>Total Feedback ({feedback.length})</p>
    </div>
  )
}

export default FeedbackStats