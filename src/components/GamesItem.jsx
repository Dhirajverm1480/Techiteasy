import React from 'react'
import { Link } from 'react-router-dom'

const GamesItem = ({ id, image, title, price }) => {
    return (
        <Link to={`/games/${id}`} className='cursor-pointer'>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out w-36 h-32' src={image && image[0]} alt={title} />
            </div>
            <p className='pt-3 pb-1 text-sm'>{title}</p>
            <p className='text-sm font-medium'>{price}</p>
        </Link>
    )
}

export default GamesItem
