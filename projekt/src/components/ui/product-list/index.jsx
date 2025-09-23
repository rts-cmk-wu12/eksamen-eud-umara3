
"use client";


import { useEffect, useState } from "react";
import ProductCard from "@/components/ui/products-cards";
import Paging from "@/components/ui/paging";
import "./product-list.scss";


export default function ProductList(){
    const[products, setProducts] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const  PRODUCTS_PER_PAGE = 6;

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/listings`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products", error));
    }, []);

    const startIndex = (currentPage -1) * PRODUCTS_PER_PAGE;
    const paginatedProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    return(
        <div className="product-list">
        <div className="product-grid">
              {paginatedProducts.map(product => (
            <ProductCard key={product.id} product={product}/>
            ))}
            </div>
             <div>
            <Paging total={products.length} perPage={PRODUCTS_PER_PAGE} currentPage={currentPage} onPageChange={setCurrentPage} />
            </div>
        </div>
    )
}