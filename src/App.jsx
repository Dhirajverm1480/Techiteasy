import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Tech from './pages/Products'
import Game from './pages/Game'
import Book from './pages/Book'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import SearchBar from './components/SearchBar'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <hr />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tech' element={<Tech />} />
          <Route path='/game' element={<Game />} />
          <Route path='/book' element={<Book />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/products/:productId' element={<Product />} /> */}
          <Route path='/productDetails/:productId' element={<ProductDetails/>} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/order' element={<Orders />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
