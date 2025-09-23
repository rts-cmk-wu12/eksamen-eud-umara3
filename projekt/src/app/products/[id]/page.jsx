

import { cookies } from "next/headers";
import SimilarProducts from "@/components/ui/similar-products";
import "./products.scss";

export default async function ProductDetail({params}) {
    const {id} = await params;
    const response = await fetch(`http://localhost:4000/api/v1/listings/${id}`);
    const listing = await response.json();

    const cookieStore = cookies();
    const token = (await cookieStore).get("Id_token");
    const isLoggedIn = Boolean(token);

    return (
        <>
        <div className="listing-detail">
         <div>
        <img className="listingdetail-img"  src={listing.asset?.url} alt={listing.title}/>
        </div>
        <div>
        <h1>{listing.title}</h1>
        <p>{listing.description}</p>
        </div>
       
       <div>
        {isLoggedIn && (
            <button onClick={() => {

            }}>

            </button>
        )}
        </div>
       
        </div>
         
            <SimilarProducts currentId={id} />
        
        </>
    );
        
    
}