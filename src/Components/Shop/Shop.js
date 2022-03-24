import React, { useEffect, useState } from 'react'
import Orders from '../Orders/Orders'
import Products from '../Products/Products'
import './Shop.css'

export default function Shop() {

  const [pds, setPds] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setPds(data))
  }, [])

  const addCart = (pd) => {
    console.log(pd)
  }

  return (
    <div className='shopPage'>
      <Products pds={pds} addCart={addCart} />
      <Orders />
    </div>
  )
}
