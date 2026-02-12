import { useContext} from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Items from './Items'
import Title from './Title'

const ProductSections = () => {
  const { products} = useContext(ShopContext)

  const latestProduct = products.slice(0,10)

  return (
    <>
      <section className='my-2 mx-3 p-2'>
        <Title title={"PRODUCT"} />
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProduct.map((item) => (
              <Items key={item._id} id={item._id} image={item.image} title={item.title} price={item.price} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default ProductSections
