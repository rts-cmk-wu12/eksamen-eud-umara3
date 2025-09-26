"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
//import { email } from "zod";


export default async function createUser(formData){
 const token = cookies().get("swaphub_token")?.value;
 if (!token) redirect("/login");

 const payload = {
    firstname: formData.get("firstname")?.toString().trim(),
    lastname:  formData.get("lastname")?.toString().trim(),
    email: formData.get("email")?.toString().trim(),
     password: formData.get("password")?.toString().trim(),

 };

 const response = await fetch("http://locaalhost:4000/api/v1/users",{
    method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:`Bearer ${token}`,
  },
  body: JSON.stringify(payload),
}
 );

 const text =await response.text();
 if(!response.ok){
    const msg = text || "user not create";
    redirect("/login")
    
 }

}


