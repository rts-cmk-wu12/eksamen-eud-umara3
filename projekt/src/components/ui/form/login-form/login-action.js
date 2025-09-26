
"use server";


import { cookies } from "next/headers";
import {z} from "zod";

export default async function loginAction(prevState, formData) {
	const { email, password } = Object.fromEntries(formData);
    

    

    const schema = z.object({
		email: z.string().min(1, { message: "First write your email" }),
		password: z.string().min(1, {message: "First wrie your password"})
	});

    const validated = schema.safeParse({
		email,
		password
	});

	if (!validated.success) return {
		...validated,
		...z.treeifyError(validated.error),
         data: {                            //for defaultvalue cheack in react
			email,
			password
		}
	}


    
  try{
   const response = await fetch("http://localhost:4000/auth/token", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": JSON.stringify( {


    email: validated.data.email,
	password: validated.data.password
  })
});
  

    if(!response.ok) return{
       success: false,
		errors: ["Wrong email or password "], 
        data: {
			email,
			password
		}
    }

    const json = await response.json();
    const cookieStore = await cookies();
console.log("login-page token:"+json.token);
	cookieStore.set({
		name: "Id_token",
		value: json.token,
		path: "/",             
		secure: true
	});


	cookieStore.set({
		name: "Id_user",
		value: json.userId,
		path: "/",             
		secure: true
	});

   

    //redirect("/profile");

    return {
		success: true,
		data: {
			email,
			password
		}
	};
} catch (error) {
    console.error("Login error:", error);
    return{
        success: false,
        errors: ["intern server error"],
        data: {email,password}
    };
}


}























