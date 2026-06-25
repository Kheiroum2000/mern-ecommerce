import React from "react"
import { useState, useEffect} from "react"



function Products() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
    fetch("http://localhost:5001/products")
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])

return(
    <div>{products.map(product =>(
        <h2 key={products._id}>{products.title}</h2>
        
        ))}
    </div>

    )
}


export default Products
