

import { useState } from "react"


import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";




const App = () => {

  

  const [feedback, setFeedback] = useState([
    {
      id:1,
      text:"This is a text 1"
    },
    {
      id:2,
      text:"This is a text 2"
    },
    {
      id:3,
      text:"This is a text 3"
    },
  ]);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter(item => item.id !== id))
  }


  return (
    <div>
      <Header/>
      
      <div className="container">
         <FeedbackForm/>
         <FeedbackStats feedback={feedback}/>
         <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>         
      </div>
    </div>
  )
}

export default App


