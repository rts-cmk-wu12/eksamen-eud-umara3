
//import styles from "./page.module.css";

import ProductList from "@/components/ui/product-list";
//import Paging from "@/components/ui/paging";
import SideBar from "@/components/ui/side-bar";
import "./style/page.scss";
import SearchForm from "@/components/ui/search-bar";
//import { useState } from "react";

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
    <div className="front-page">
      <SideBar/>
      <SearchForm/>
      <ProductList />

   </div>
  );
}
