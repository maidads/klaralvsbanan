import React from 'react'
import "./Button.css"

const Button = ({ text, icon}) => {
  return (
    <> 
      <button className='mainButton'>
        {icon && <img src={icon} alt="icon" className='mainButton__icon' />}
        {text}
      </button>
    </>
  )
}

export default Button