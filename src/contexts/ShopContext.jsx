import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [products, setProducts] = useState([]);
    const [games, setGames] = useState([]);
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({})
    const [token, setToken] = useState()
    const navigate = useNavigate();
    const delivery_fee = 10;

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems)

        if (cartData[itemId]) {
            // if(cartData[itemId][size]){
            //     cartData[itemId][size] += 1;
            // }
            // else{
            //     cartData[itemId][size] = 1;
            // }

            cartData[itemId] += 1
        }
        else {
            cartData[itemId] = {};
            // cartData[itemId] = 1;
        }
        setCartItems(cartData);
    }

    const getProductData = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/v1/products/listProduct")
            // console.log(response.data.products)
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("Product Card error: ", error)
            toast.error(error.message)
        }
    }

    const getGameData = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/v1/games/listgame")
            // console.log(response.data.games)
            if (response.data) {
                // console.log("Response 2: ", response.data.games)
                setGames(response.data.games)

            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("Game Card error: ", error)
            toast.error(error.message)
        }
    }

    const getBookData = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/v1/books/listbook")
            console.log(response.data.books)
            if (response.data) {
                console.log("Response 2: ", response.data.books)
                setBooks(response.data.games)

            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("Game Card error: ", error)
            toast.error(error.message)
        }
    }

    // useEffect(() => {
    //     console.log('CartItem : ',cartItems)
    // },[cartItems])

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount
    }

    useEffect(() => {
        getProductData()
        getGameData()
        getBookData()
    }, [])

    useEffect(()=>{
        if (token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
        }
    },[])

    const value = {
        products, games, books, backendUrl, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate, delivery_fee, token, setToken
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider