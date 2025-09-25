
"use client";
import { useState } from "react";
import  CreateUser  from "./newuser-action";
import "./newuser.scss";

export default function NewUser(){
    const [error, setError] = useState("");

    async function handleSubmit(formData) {
        const firstname = formData.get("firstname")?.toString().trim();
         const lastname = formData.get("lastname")?.toString().trim();
         // const password = formData.get("password")?.toString().trim();

          if(!firstname || !lastname){
            setError("please write your first and last name");
            return;
          }

          setError("");
          await CreateUser(formData);
          const result = await CreateUser(formData);

        
        
    }

    return(
        <>
        <form action={handleSubmit}>
            <h1>Create User</h1>
            {error && <p>{error}</p>}

            
                <input name="firstname" placeholder="First name"/>
                <input name="lastname" placeholder="Last name"/>
            

             <input name="email" type="email" autoComplete="email" placeholder="Email"/>
            <input name="password" type="password" autoComplete="new-password" placeholder="Password"/>

            <button>Create</button>


        </form>
        </>
    )
}





