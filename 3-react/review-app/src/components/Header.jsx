import React from 'react'

const Header = ({text="Review App",bgColor="#124712",textColor="#ffffff"}) => {
  return (
    <header style={{
        backgroundColor:bgColor,
        color:textColor
    }}>
        <div className='container'>
            <h1>{text}</h1>
        </div>
    </header>
  )
}

export default Header





