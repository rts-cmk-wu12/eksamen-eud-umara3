
//copy this code from my class work

import ProfileForm from "@/components/ui/form/profile-form";
import { cookies } from "next/headers";

export const metadata = {
  title: "Profile "
}

export default async function ProfilePage() {
	const cookieStore = await cookies();
    console.log("cookies", cookieStore.getAll());
	const user = cookieStore.get("Id_user");
	const token = cookieStore.get("Id_token");
    //console.log("userid", user);
   // console.log("token", token);

    if(!user || !token) {
        throw new Error("id or token not found in cookies")
    }

	const response = await fetch(`http://localhost:4000/api/v1/users/${user.value}`, {
        method: "GET",
		headers: {
			Authorization: `Bearer ${token.value}`,
		},
	});

   const profileData = await response.json();

	return (
		<>
			 
             <ProfileForm profileData={profileData} />
      
       </>
            );

    
        }




		












