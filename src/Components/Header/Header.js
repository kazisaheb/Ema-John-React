import React from 'react'
import logo from '../../images/Logo.svg'
import './Header.css'

export default function Header() {
  return (
    <nav className='navBar'>
      <img src={logo} alt="" />
      <div>
        <a href="/order">Order</a>
        <a href="/order">Order</a>
        <a href="/order">Order</a>
      </div>
    </nav>
  )
}
