import { useState, useEffect} from "react"
import styles from "./Products.module.css"



function Products() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
    fetch("http://localhost:5001/products")
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])

return(
    <div className={styles.outerdiv}>{products.map(product =>(
        <div className={styles.outerWrapper} key={product._id}>
            <img src={product.image} alt={product.title}></img>
            <span className={styles.cat}>{product.category}</span>
            <h2 className={styles.title}>{product.title}</h2>
            <h3 className={styles.price}>{product.price}</h3>
            <button className={styles.btn}>Buy now!</button>

        </div>
        
        ))}
    </div>

    )
}


export default Products
