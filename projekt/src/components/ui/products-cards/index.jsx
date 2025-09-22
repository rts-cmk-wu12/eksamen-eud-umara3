
"use client";

import { useEffect,useState } from "react";

export default function ProductCard() {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/listings`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products", error));

    },[]);

    if (!product) return <div>loading</div>

    return(
       < div>
       {product.map((product) => (
       < div key={product.id} className="product-card">
       <img src={product.asset.url} alt={product.title} />
       <h2>{product.title}</h2>
       <p>{product.price}</p>
       </div>
    ))}
    </div>
    );

}