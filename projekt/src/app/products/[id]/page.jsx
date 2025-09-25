


import { cookies } from "next/headers";
import SimilarProducts from "@/components/ui/similar-products";
import "./products.scss";

export const metadata = {
  title: "Listing details "
}

export default async function ProductDetail({params}) {
    const {id} = await params;
    const cookieStore =await cookies();
    const token = cookieStore.get("Id_token")?.value;
    const isLoggedIn = Boolean(token);

    const response = await fetch(`http://localhost:4000/api/v1/listings/${id}`,{
        headers:{
           Authorization: `Bearer ${token}`, 
        }
    });

    if(!response.ok){
        return<div>Error:No listing found</div>
    }
    const listing = await response.json();

    
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
            <button>detail

            </button>
        )}
        </div>
       
        </div>
         
            <SimilarProducts currentId={id} />
        
        </>
    );
        
    
}







