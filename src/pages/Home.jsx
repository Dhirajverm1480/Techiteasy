import React from 'react'
import ProductSections from '../components/ProductSections'
import HomeBoxImage from '../components/HomeBoxImage'

const Home = () => {
  return (
    <div className='page-frame'>
      <section id='hero' className='flex justify-center items-center min-h-screen rounded-lg shadow-lg mb-3 mx-3'>
        <div className='p-3 text-center rounded-xl border-b border-r'>
          <h1 className='text-white text-3xl sm:text-5xl'>Welcome to the TechItEasy.</h1>
          <h3 className='text-white text-sm sm:text-lg'>World of the Tech Products, Games, Books</h3>
        </div>
      </section>
      {/*<HomeBoxImage/>*/}
      <ProductSections/>
    </div>

  )
}

export default Home
