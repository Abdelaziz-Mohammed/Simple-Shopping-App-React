
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { useEffect, useState } from "react";
import RootLayout from './Layouts/RootLayout.jsx';
import Menu from "./Pages/Menu.jsx";
import ShoppingCart from "./Pages/ShoppingCart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Admin from "./Pages/Admin.jsx";
import ProductEdit from "./Components/ProductEdit.jsx";
// import { toast, ToastContainer } from 'react-toastify';

function App() {
    const [products, setProducts] = useState([]);
    async function fetchProducts() {
        const res = await fetch('http://localhost:3001/products');
        const data = await res.json();
        setProducts(data);
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    function clickCartHandler(idx) {
        setProducts(p => p.map((product, index) => index === idx ? {...product, isInCart: !product.isInCart} : product));
    }
    function incHandler(idx) {
        setProducts(p => p.map((product, index) => index === idx ? {...product, count: product.count + 1} : product));
    }
    function decHandler(idx) {
        setProducts(p => p.map((product, index) => index === idx ? {...product, count: product.count > 0 ?  product.count - 1 : 0} : product));
    }
    function deleteHandler(idx) {
        setProducts(p => p.map((product, index) => index === idx ? {...product, isInCart: false} : product));
    }
    function cartCounter() {
        let count = 0;
        for (let i in products) {
            if (products[i].isInCart && products[i].count > 0) count++;
        }
        return count;
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout cartCounter={cartCounter()} />}>
                <Route index element={<Menu products={products}
                clickCartHandler={clickCartHandler} />} />
                <Route path="menu" element={<Menu products={products}
                clickCartHandler={clickCartHandler} />} />
                <Route path="cart" element={<ShoppingCart products={products} cartCounter={cartCounter()}
                incHandler={incHandler} decHandler={decHandler} deleteHandler={deleteHandler} />} />
                <Route path="checkout" element={<Checkout products={products} />} />
                <Route path="admin" element={<Admin products={products} />} />
                <Route path="productEdit/:id" element={<ProductEdit products={products} />} />
            </Route>
        )
    )
    return (
        <>
            {/* <ToastContainer /> */}
            <RouterProvider router={router} />        
        </>
    )
}

export default App
