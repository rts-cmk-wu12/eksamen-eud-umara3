

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./similar.scss";

export default function SimilarProducts({currentId}){
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        async function fetchSimilar() {
            try{
                const response = await fetch(`http://localhost:4000/api/v1/listings`);
                const data = await response.json();

                const filtered = data 
                .filter(product => product.id !== parseInt(currentId))
                .slice(0,4);

                setSimilarProducts(filtered);
            } catch (error){
                console.error("not any similar product", error);
            }
            }
        fetchSimilar();
    },[currentId]);

    if (!similarProducts.length) return null;

    return(
        <div className="similar-wrapper">
        <h2>Similar Products</h2>
        <div className="similar-products">
            {similarProducts.map(product => (
                <Link
                key={product.id} href={`/products/${product.id}`}>

                    <img className="similar-img"
                    src={product.asset.url} alt={product.title}/>

                    
                </Link>
            ))}
        </div>
        </div>
    );
}