
//copy this code from my class work
import ProfileForm from "@/components/ui/form/profile-form";
import { cookies } from "next/headers";

export const metadata = {
  title: "Profile "
}

export default async function ProfilePage() {
	const cookieStore = await cookies();
    console.log("cookies", cookieStore.getAll());
	const userId = cookieStore.get("ld_userid");
	const token = cookieStore.get("Id_token");

    if(!userId || !token) {
        throw new Error("id or token not found in cookies")
    }

	const response = await fetch(`http://localhost:4000/api/v1/users/${userId.value}`, {
		headers: {
			Authorization: "Bearer " + token.value,
		},
	});

    
	const profileData = await response.json();

	return (
		<>
			<h1>Profil</h1>
			<ProfileForm profileData={profileData} />

       </>
            );
        }
		



//import { cookies } from "next/headers";
//import ProfileForm from "./profile-form";

/*export default async function ProfilePage() {
	const cookieStore = await cookies();
	const token = cookieStore.get("Id_token")?.value;
	const userId = cookieStore.get("ld_userid")?.value;
    
    console.log("Token:", token);
    console.log("User ID:", userId);
	
    if (!token || !userId) {
		return <p>Du er ikke logget ind.</p>;
	}

	try {
		const res = await fetch(`http://localhost:4000/api/v1/users/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			cache: "no-store",
		});

		if (!res.ok) {
			const errorText = await res.text();
			console.error("API Fejl:", res.status, errorText);
			throw new Error(`Fejl ved hentning af data`);
		}


		const user = await res.json();

		return <ProfileForm user={{
			id: user.id,
			email: user.email,
			firstname: user.firstname,
			lastname: user.lastname,
			password: "", // leave it empty for editing
		}} />;
	} catch (err) {
		console.error("Server Fejl:", err);
		return <p>Kunne ikke hente dine oplysninger.</p>;
	}
}*/




































