import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../contexts/ShopContext';

const Product = () => {
  const { productId } = useParams();
  console.log('ProductId ', productId);
  const { products, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        // console.log(item)
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [products, productId])
  return productData ? (
    <div className='page-frame bg-red-200 xl:h-screen transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%] mb-20'>
            <img className='w-[70%] h-96 cursor-pointer' src={image} alt="" />
          </div>
        </div>
        {/* -------Product Info------ */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.title}</h1>
          <p className='mt-5 text-xl font-medium'>{productData.description}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{'Rs.'}{productData.price}</p>
          <hr />
          <p className='mt-5 text-gray-500 md:w-4/5'>{'Type: '}{productData.type}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{'Category: '}{productData.category}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{'Brand: '}{productData.brand}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{'Model: '}{productData.model}</p>
          
          <button onClick={() => addToCart(productData._id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
          <hr className='mt-8 sm:w-4/5 ' />
          {/* <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p></p>
            <p></p>
            <p></p>
          </div> */}
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
