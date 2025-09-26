
"use client";


import { useActionState, useEffect, useState } from "react";
import ProductCard from "@/components/ui/products-cards";
import Paging from "@/components/ui/paging";
import "./product-list.scss";
import SearchAction from "@/components/ui/product-list/search-action";
import { IoIosSearch } from "react-icons/io";
//import "@/components/ui/search-bar/search.scss";





export default function ProductList(){
    const[allproducts, setAllProducts] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const  PRODUCTS_PER_PAGE = 6;

    const [formState, formAction, pending] = useActionState(SearchAction);
    const isSearching = Array.isArray(formState);

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/listings`)
        .then((response) => response.json())
        .then((data) => setAllProducts(data))
        .catch((error) => console.error("Error fetching products", error));
    }, []);

    const startIndex = (currentPage -1) * PRODUCTS_PER_PAGE;
    const paginatedProducts = allproducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    return(
        
       
        <div className="product-list">

             
			<form action={formAction} className="search-form">
				
			<label className="search-label">
						
			  <input type="search" name="keyword" placeholder="search" className="search-input" />
				 	
			  <button type="submit" className="search-button">
                <IoIosSearch />
			  </button>
			</label>
			</form>

            {pending && <p>loading</p>}
            {isSearching? (
                <>
                {formState.length === 0? (
                    <p>no products found</p>
                ) : (
                    <div className="product-grid">
                        {formState.map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </div>
                
               
            )}
             </>
            ):(
                <>

        <div className="product-grid">
              {paginatedProducts.map(product => (
            <ProductCard key={product.id} product={product}/>
            ))}

            
            </div>
            <div className="product-paging">
            <Paging total={allproducts.length} perPage={PRODUCTS_PER_PAGE} currentPage={currentPage} onPageChange={setCurrentPage} />
            </div>
            </> 
            )}
        </div>
        
       
    );
}