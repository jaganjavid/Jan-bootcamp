import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="about">
     <h1>This is a review app</h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptate minus doloremque nam maiores 
        eligendi molestiae cum soluta excepturi minima dolore quaerat blanditiis, non vero aperiam quod eveniet et quo?</p>

     <Link to="/" className="btn btn-primary">Back to home</Link>   
    </div>
  )
}

export default About