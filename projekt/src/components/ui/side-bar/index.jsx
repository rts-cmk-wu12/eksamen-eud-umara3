
"use client";

import { useEffect, useState } from "react";
import "./side-bar.scss";


export default function SideBar({onCategorySelect}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/categories`)
    .then((response) => response.json())
    .then((data) => setCategories(data))
    .catch((error) => console.error("error loading categories", error));
  },[]);

  return(
    <div className="side-bar">
        <h3>Keywords</h3>

        <div className="sidebar-filter">
            <label htmlFor="category"></label>
            <select id="category"
            onChange={(e) => onCategorySelect(e.target.value)} >

                <option value=""></option>
                {categories.map((categories) => (
                <option key={categories.id} value={categories.id}>{categories.name}</option>
                ))}
            </select>
        </div>

        <div className="sidebar-filter">
           <label htmlFor="category">Colour</label> 
        </div>

         <div className="sidebar-filter">
           <label htmlFor="category">Size</label> 
        </div>
    </div>
  )
}