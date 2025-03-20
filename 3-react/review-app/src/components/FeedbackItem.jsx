import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Card from "../shared/Card";

const FeedbackItem = ({item, handleDelete}) => {
  return (
    <Card>
        <div className='card-wrapper'>
            <h4>{item.text}</h4>

            <div>
                <div className='edit'>
                  <FaEdit color="orange" />
                </div>

                <div className='delete'>
                  <MdDeleteOutline color="red" onClick={() => handleDelete(item.id)}/>
                </div>
            </div>
        </div>
    </Card>
  )
}

export default FeedbackItem