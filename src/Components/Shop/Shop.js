import React from 'react'
import Orders from '../Orders/Orders'
import Products from '../Products/Products'
import './Shop.css'

export default function Shop() {
  return (
    <div className='shopPage'>
      <Products />
      <Orders />
    </div>
  )
}
