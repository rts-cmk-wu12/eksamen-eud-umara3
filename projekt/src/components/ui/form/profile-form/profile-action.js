// copy from my class work

"use server";
/*import { cookies } from "next/headers";
import { z}  from "zod";

export default async function profileAction(prevState, formData) {
	const { firstname, lastname, email, password } = Object.fromEntries(formData);
    

	const schema = z.object({
		firstname: z.string().min(1, { message: "Du skal skrive et fornavn" }),
		lastname: z.string().min(1, { message: "Du skal skrive et efternavn" }),
		email: z.string().min( { message: "you must write your email" }),
        password: z.string().min(1,{ message: "you must write your password" }),
		
	});

	const validated = schema.safeParse({
		
	
		firstname,
		lastname,
		email,
		password,
	});

    if(!validated.success) return {
        success: false,
        ...validated,
        ...z.treeifyError(validated.error),
        data: {
            firstname,
            lastname,
            email,
            password,
        },
    }

    const cookieStore = await cookies();
    const userId = cookieStore.get("ld_userid");
    const token = cookieStore.get("ld_token");
     
    const formBody = new FormData();
	formBody.append("firstname", validated.data.firstname);
	formBody.append("lastname", validated.data.lastname);
	formBody.append("email", validated.data.email);
	formBody.append("password", validated.data.password);
    if(!userId || !token) {
        return{success: false, errors: ["You are not login"]}
    }

    try{


    const response = await fetch(`http://localhost:4000/api/v1/users/${userId.value}`, {
		method: "PUT",
		headers: {
            
			Authorization: "Bearer " + token.value,
            "Content-Type": "application/json",
		},
		body: formBody
	});
    if(!response.ok){
        
        return{ 
            success:false, errors: ["working on problem"]
        }
    }
    return{success: true, data: validated.data};
    
} catch (error){
    console.error("fail to pass json",error);
    return{ success:false, errors: ["Server problem"]}
}


	//console.log(validated);
}*/


"use server";

import { cookies } from "next/headers";
import { z } from "zod";

export default async function profileAction(prevState, formData) {
	const { firstname, lastname, email, password } = Object.fromEntries(formData);

	const schema = z.object({
		firstname: z.string().min(1, { message: "Fornavn er påkrævet" }),
		lastname: z.string().min(1, { message: "Efternavn er påkrævet" }),
		email: z.string().email({ message: "Ugyldig email" }),
		password: z.string().min(6, { message: "Mindst 6 tegn" }),
	});

	const parsed = schema.safeParse({ firstname, lastname, email, password });

	if (!parsed.success) {
		return {
			success: false,
			...parsed,
			...z.treeifyError(parsed.error),
			data: { firstname, lastname, email, password },
		};
	}

	const cookieStore = cookies();
	const token = cookieStore.get("Id_token")?.value;
	const userId = cookieStore.get("ld_userid")?.value;

    console.log("userid: "+userId)

	if (!token || !userId) {
		return {
			success: false,
			errors: ["Du er ikke logget ind"],
			data: parsed.data,
		};
	}

	try {
		const res = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				 Authorization:`Bearer ${token}`,
                
			},
			body: JSON.stringify(parsed.data),
		});
        console.log("token"+ token)

		if (!res.ok) {
			const error = await res.text();
			console.error("Update Fejl:", error);
			return {
				success: false,
				errors: [ "Opdatering fejlede"],
				data: parsed.data,
			};
		}

		return {
			success: true,
			data: parsed.data,
		};
	} catch (err) {
		console.error("Fejl ved opdatering:", err);
		return {
			success: false,
			errors: ["Serverfejl"],
			data: parsed.data,
		};
	}
}
