
//import styles from "./page.module.css";

import ProductList from "@/components/ui/product-list";
//import SideBar from "@/components/ui/side-bar";

//import SearchForm from "@/components/ui/search-bar";


export const metadata = {
  title: "Home"
}

export default function Home() {
  const Style = {
    width: "1200px",
    height: "810px",
   margin: "auto",
   display: "flex"
    
    
  }
    return (
    < >
     
      
     <div className=""><ProductList /></div> 
      

   </>
  );
}
