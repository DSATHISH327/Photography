import React from 'react'
import './Header.css'
const Header = () => {
  const List_items=["Home", "Landscape", "Square", "Contact-us"]
  return (
    <>
      <div className='navbar'>
      <ul>
        <li>{List_items[0]}</li>
        <li>{List_items[1]}</li>
        <li>{List_items[2]}</li>
        <li>{List_items[3]}</li>
      </ul>
      </div>
      <div className='header'>
        <p>Desaboina Satish</p>
        
      </div>
    </>
  )
}

export default Header
