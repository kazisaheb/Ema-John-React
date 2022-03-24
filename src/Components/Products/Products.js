import React from 'react'
import Product from '../Product/Product'
import './Products.css'

export default function Products({ pds, addCart }) {


  return (
    <div className='products'>
      {
        pds.map(pd => <Product key={pd.id} pd={pd} addCart={addCart} />).slice(0, 5)
      }

    </div>
  )
}