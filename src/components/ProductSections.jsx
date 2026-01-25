import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Items from './Items'
import GamesItem from './GamesItem'

const ProductSections = () => {
  const { products, games, books } = useContext(ShopContext)
  // console.log("Product -> ",products)
  const [latestProduct, setLatestProduct] = useState([]);   // products
  const [latestGame, setLatestGames] = useState([])   // Games
  const [latestBook, setLatestBook] = useState([])

  useEffect(() => {
    setLatestProduct(products.slice());
    setLatestGames(games.slice())
    setLatestBook(books.slice())
  }, [products])

  return (
    <>
    {/* tech product render */}
      <section className='my-2 mx-3 p-2'>
        <h2>Product</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProduct.map((item, index) => (
              <Items key={index} id={item._id} image={item.image} title={item.title} price={item.price} />
            ))
          }
        </div>
      </section>
      {/* GAme render */}
      {/* <section className='my-2 mx-3 p-2'>
        <h2>Game</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            
            latestGame.map((item, index) => (
              <Items key={index} id={item._id} image={item.image} title={item.title} price={item.price} />
            ))
          }
        </div>
      </section> */}

      {/* Book */}

      {/* <section className='my-2 mx-3 p-2'>
        <h2>Books</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            
            latestBook.map((item, index) => (
              <Items key={index} id={item._id} image={item.image} title={item.title} price={item.price} />
            ))
          }
        </div>
      </section> */}
    </>
  )
}

export default ProductSections
