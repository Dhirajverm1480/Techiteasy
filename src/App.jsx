import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Tech = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Login = lazy(() => import("./pages/Login"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
const Orders = lazy(() => import("./pages/Orders"));
const WishList = lazy(() => import("./pages/WishList"));
const Contact = lazy(() => import("./pages/Contact"));
const Results = lazy(() => import("./pages/results"));

export const backendUrl =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const App = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <ScrollToTop />
      {/* <hr /> */}
      <main className="min-h-screen">
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Tech />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/productDetails/:productId"
              element={<ProductDetails />}
            />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/wish" element={<WishList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
