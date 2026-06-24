import React from "react";
import { BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderConfirmation from "./pages/OrderConfirmation"

function App(){
  return(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/SingleProduct" element={<SingleProduct/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
      <Route path="/OrderConfirmation" element={<OrderConfirmation/>}/>
    </Routes>



    </BrowserRouter>
    
)}



export default App