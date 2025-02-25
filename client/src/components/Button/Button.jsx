import React from 'react'
import "./Button.css"

// När du har skapat en komponent som heter Button och lagt till den i App.jsx, så skickar du med props med text och icon. Om icon finns, så visas den.
//Exempel på hur komponenten skrivs: <Button text="Click Me" icon={myIcon} />

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