import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Card from "../shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


const FeedbackItem = ({item}) => {


  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);


  return (
    <Card>
        <div className='card-wrapper'>
            <h4>{item.text}</h4>

            <div>
                <div className='edit'>
                  <FaEdit color="orange" onClick={() => editFeedback(item)}/>
                </div>

                <div className='delete'>
                  <MdDeleteOutline color="red" onClick={() => deleteFeedback(item.id)}/>
                </div>
            </div>
        </div>
    </Card>
  )
}

export default FeedbackItem