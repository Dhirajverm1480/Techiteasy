import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import SearchIcon from '../assets/icons/search-regular-24.png'
import CloseIcan from '../assets/icons/close.png'
import { useLocation } from 'react-router-dom'   // this hook is used for get the page location

const SearchBar = () => {

  const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
  const location = useLocation();
  const [searchVisible, setSearchVisible] = useState(false)

  useEffect(() =>{
    console.log(location.pathname);  // Using .pathname we get the location
    if(location.pathname.includes('collection')){
      setSearchVisible(true)
    }
    else{
      setSearchVisible(false)
    }
  },[location])
  return showSearch?(
    <div className='border-t border-b bg-gray-50'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
          <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
          <img className='w-4' src={SearchIcon} alt="Search" />
        </div>
        <img onClick={(e) => setShowSearch(false)} className='inline w-3 cursor-pointer' src={CloseIcan} alt="close" />
    </div>
  ):null
}

export default SearchBar
