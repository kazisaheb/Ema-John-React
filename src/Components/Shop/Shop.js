import React, { useEffect, useState } from 'react'
import Orders from '../Orders/Orders'
import Products from '../Products/Products'
import './Shop.css'

export default function Shop() {

  //State & function for fetch data
  const [pds, setPds] = useState([])
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setPds(data))
  }, [])

  //State & function for Order Cart
  const [cart, setCart] = useState([])
  const addCart = (pd) => {
    setCart(pd)
  }

  // localStorage cart data
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className='shopPage'>
      <Products pds={pds} addCart={addCart} />
      <Orders cart={JSON.parse(localStorage.getItem('cart'))} />
    </div>
  )
}
