import React, { useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'


const FeedbackForm = () => {

  const [text, setText] = useState("");  
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");


  const handleTextChange = (e) => {

    const trimmedText = e.target.value.trimStart();

    let textError = "";

    if(trimmedText.length < 10){

        textError = "Character must be at least 10"
        setMessage(textError);
        setBtnDisabled(true);
        
    }else{
        setMessage("");
        setBtnDisabled(false);
    }


    setText(trimmedText);

  } 

  const handleSubmit = (e) => {

    console.log("Add to Feedback List")

  }

  return (
    <Card>
        <h3>Add your Reviews</h3>

        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <input type="text" placeholder='Enter your ideas' value={text} onChange={handleTextChange}/>
                <Button version="primary" type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            <p className='message'>{message && message}</p>
        </form>
    </Card>
  )
}

export default FeedbackForm