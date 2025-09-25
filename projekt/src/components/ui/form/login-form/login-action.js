
"use server";


import { cookies } from "next/headers";
import {z} from "zod";

export default async function loginAction(prevState, formData) {
	const { email, password } = Object.fromEntries(formData);
    

    

    const schema = z.object({
		email: z.string().min(1, { message: "Du skal udfylde et email" }),
		password: z.string().min(1, {message: "Du skal udfylde en adgangskode"})
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
		errors: ["Forkert email eller adganskode"], 
        data: {
			email,
			password
		}
    }

    const json = await response.json();
    const cookieStore = await cookies();

	cookieStore.set({
		name: "Id_token",
		value: json.token,
		path: "/",             //give link to login form page
		secure: true
	});

    /*cookieStore.set({
        name: "Id_userid",
        value: String(json.data.id),
        path: "/",
        secure: true
    });*/

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























