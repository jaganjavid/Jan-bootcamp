
import { createContext, useState } from "react";

import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

// console.log(FeedbackContext);


export const FeedbackProvider = ({children}) => {


    const [feedback, setFeedback] = useState([
          {
            id:1,
            text:"This is a text from context 1"
          },
          {
            id:2,
            text:"This is a text from context 2"
          },
          {
            id:3,
            text:"This is a text from context 3"
          }
    ]);


    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit:false    
    })

    

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter(item => item.id !== id))
    }

    const editFeedback = (item) => {
      setFeedbackEdit({
        item:item, 
        edit:true
      })
    }

    return(
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback
            }}>
            {children}
        </FeedbackContext.Provider>
    )


}

export default FeedbackContext;

