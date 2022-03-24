import './Orders.css'

export default function Orders({ cart }) {

  return (
    <div className='Orders'>
      <h3>Order Summery</h3>
      <p>Selected Items: </p>
      <p>Total Price: $ {cart.price}</p>
      <p>Shipping Charge: {cart.shipping}</p>
      <p>Tax: ${cart.price * .01}</p>
      <h4>Grand Total: ${cart.price + cart.shipping + cart.price * .01}</h4>
      <button className='clearCart'>Clear Cart ✘</button>
      <br />
      <button className='reviewOrder'>Review Order ➽</button>
    </div>

  )
}
