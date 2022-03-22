import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './Products.css'

export default function Products() {
  const [pds, setPds] = useState([])
  // console.log(pds)
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setPds(data))
  }, [])
  return (
    <div className='products'>
      {
        pds.map(pd => <Product key={pd.id} pd={pd} />).slice(0, 5)
      }
    </div>
  )
}
