import React from 'react'
import './Product.css'

export default function Product({ pd }) {
  return (
    <div className='product'>
      <img src={pd.img} alt="" />
      <h3>{pd.name}</h3>
      <h4>Price: ${pd.price}</h4>
      <p>Manufacturer: {pd.seller}</p>
      <p>Ratings: {pd.ratings}</p>
      <button>Add to Cart</button>
    </div>
  )
}
