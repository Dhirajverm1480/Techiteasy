import { Link, NavLink } from "react-router-dom"
import Icon from '../assets/Icon.webp'
import Gears from '../assets/icons/Gears.png'
import CartImg from '../assets/icons/cart-regular-24.png'
import SearchPng from '../assets/icons/search-regular-24.png'
import Menu from '../assets/icons/menu.png'
import Close from '../assets/icons/close.png'
import { useContext, useState } from "react"
import { ShopContext } from "../contexts/ShopContext"


const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext)

  return (
    <header className="sticky top-0 z-1000 px-[4%] backdrop-blur-3xl">
      <div className='flex justify-between items-center px-3 py-2'>
        {/* <Link to={`/`}><img className='w-10 cursor-pointer' src={Icon} alt="" /></Link> */}
        <ul className='hidden sm:flex gap-5 text-sm'>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/tech'>
            <p>Product</p>
          </NavLink>
          <NavLink to='/about'>
            <p>About</p>
          </NavLink>
          <NavLink to='/contact'>
            <p>Contact</p>
          </NavLink>
        </ul>

        <Link to={`/`}><p className="text-2xl sm:text-3xl font-bold">TechItEasy</p></Link>

        <div className='flex gap-4 items-center'>
          <div className='flex justify-center items-center rounded-xl'>
            <img onClick={() => setShowSearch(true)} className='p-1 cursor-pointer' src={SearchPng} alt="" />
          </div>
          <NavLink to='/login'>
            <p className='bg-orange-400 py-1 px-2 rounded'>Login</p>
          </NavLink>
          <Link to='/cart' className='relative'>
            <img className='w-5 min-w-5' src={CartImg} alt="" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-300 text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
          </Link>
          <div className='group relative'>
            <img className='cursor-pointer' src={Gears} alt="" />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 rounded'>
                <p className='cursor-pointer hover:text-black border-b'>Mode</p>
                <p className='cursor-pointer hover:text-black border-b'>Mode</p>
                <p className='cursor-pointer hover:text-black border-b'>Mode</p>
              </div>
            </div>
          </div>
          <img className='sm:hidden' onClick={() => setVisible(true)} src={Menu} alt="" />
        </div>
        {/* Side */}

      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white  transition-all ${visible ? 'w-full h-screen' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={Close} alt="" />
            <p>Close</p>
          </div>
          <NavLink onClick={() => setVisible(flase)} className='py-2 pl-6 border' to='/'> home</NavLink>
          <NavLink onClick={() => setVisible(flase)} className='py-2 pl-6 border' to='/about'> About</NavLink>
          <NavLink onClick={() => setVisible(flase)} className='py-2 pl-6 border' to='/product'>Product</NavLink>
          <NavLink onClick={() => setVisible(flase)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
          <NavLink onClick={() => setVisible(flase)} className='py-2 pl-6 border' to='/book'>Book</NavLink>
        </div>
      </div>
    </header>
  )
}

export default NavBar
