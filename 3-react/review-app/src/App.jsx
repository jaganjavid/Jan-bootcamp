

import { useState } from "react"


import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";






const App = () => {

  return (
    <div>
      <Header/>
      
      <div className="container">
         <FeedbackForm/>
         <FeedbackStats/>
         <FeedbackList/>         
      </div>
    </div>
  )
}

export default App


