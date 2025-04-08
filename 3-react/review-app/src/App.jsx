

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import { Routes, Route } from "react-router-dom";
import About from "./components/About";








const App = () => {

  return (
    <div>
      <Header/>
      
      <div className="container">

        <Routes>
          <Route path="/" element={
            <>
            <FeedbackForm/>
            <FeedbackStats/>
            <FeedbackList/>  
            </>
          }/>
          <Route path="/about" element={<About/>}/>
        </Routes>
             
      </div>
    </div>
  )
}

export default App


