import React from 'react'
import "../styles/Button.css"

const Button = ({name}) => {
  return (
    <button className='btn'>
      {name}
    </button>
  )
}

export default Button
