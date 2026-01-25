import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({id, image, title, price}) => {
  
  return (
    <Link to={`/productDetails/${id}`} className='cursor-pointer shadow p-2 rounded'>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out w-40 h-36' src={image && image[0]} alt={title} />
      </div>
      <p className='pt-3 pb-1 text-sm'>{title}</p>
      <p className='text-sm font-medium'>{'Rs.'}{price}</p>
    </Link>
  )
}

export default Items
