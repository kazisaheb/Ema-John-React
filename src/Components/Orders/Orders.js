import React from 'react'
import './Orders.css'

export default function Orders() {
  return (
    <div className='Orders'>
      <h3>Order Summery</h3>
      <p>Selected Items: </p>
      <p>Total Price: $</p>
      <p>Shipping Charge: </p>
      <p>Tax: $</p>
      <h4>Grand Total: $</h4>
      <button className='clearCart'>Clear Cart</button>
      <br />
      <button className='reviewOrder'>Review Order</button>
    </div>
  )
}
