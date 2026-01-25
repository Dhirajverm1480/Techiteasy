import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'

const CartTotal = () => {
    const { getCartAmount } = useContext(ShopContext);
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <p></p>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{'Rs.'}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            {/* <p>Shopping Fee</p>
            <p>{delivery_fee}</p> */}
        </div>
        <hr />
        <div className='flex justify-between'>
            <b>Total</b>
            <b>{'Rs.'}{getCartAmount() === 0 ? 0 : getCartAmount()}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
