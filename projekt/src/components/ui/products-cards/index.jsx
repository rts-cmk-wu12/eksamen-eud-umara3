
"use client";

import Link from "next/link";
import "./products.scss";



export default function ProductCard({product}) {
   // const [product, setProducts] = useState([]);

    

    return(
       < Link href={`/products/${product.id}`} className="product-card">
      
       <img className="product-img" src={product.asset?.url} alt={product.title} />
       <h2>{product.title}</h2>
       <p>{product.price}</p>
       
    
    </Link>
    );

}