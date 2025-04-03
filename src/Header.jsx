import React from 'react'
import './Header.css'
const Header = () => {
  const List_items=["Home", "Landscape", "Square", "Awards", "Contact-us"]
  return (
    <>
      <div className='navbar' id='home'>
      <ul>
        <li><a href="#home">{List_items[0]}</a></li>
        <li><a href="#landscape">{List_items[1]}</a></li>
        <li><a href="#Square">{List_items[2]}</a></li>
        <li><a href="#Awards">{List_items[3]}</a></li>
        <li><a href="#contactus">{List_items[4]}</a></li>
      </ul>
      </div>
      <div className='header'>
        <p>Desaboina Satish...</p>
        <p className='quotation'>I see an Object as an Ornament through a Lens........</p>
      </div>
    </>
  )
}

export default Header
