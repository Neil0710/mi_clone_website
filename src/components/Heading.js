import React from 'react';
import "../styles/Heading.css"

const Heading = ({text}) => {
  return (
    <div className='headingText'>
        <span></span>
        <h2>{text}</h2>
        <span></span>
    </div>
  )
}

export default Heading