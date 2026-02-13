import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tech from "./pages/Products";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import SearchBar from "./components/SearchBar";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import ScrollToTop from "./components/ScrollToTop";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <ScrollToTop />
      {/* <hr /> */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/order" element={<Orders />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
