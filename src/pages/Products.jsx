import React, { useContext, useEffect, useState } from 'react'
import Items from '../components/Items'
import { ShopContext } from '../contexts/ShopContext'

const Tech = () => {
  const { products } = useContext(ShopContext)
  const [tectProduct, setTechProduct] = useState([])

  useEffect(()=>{
    setTechProduct(products.slice())
  },[products])
  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          tectProduct.map((item, index) => (
            <Items key={index} id={item._id} image={item.image} title={item.title} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default Tech
