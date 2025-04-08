import { Link } from "react-router-dom"



const Header = ({text="Review App",bgColor="#333333",textColor="#ffffff"}) => {
  return (
    <header style={{
        backgroundColor:bgColor,
        color:textColor
    }}>
        <div className='container'>
           <div className='d-flex'>
             <h1>{text}</h1>
             <Link to="/about">About</Link>
           </div>
        </div>
    </header>
  )
}

export default Header





