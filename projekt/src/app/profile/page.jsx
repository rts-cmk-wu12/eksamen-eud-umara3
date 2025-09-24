
//copy this code from my class work
import ProfileForm from "@/components/ui/form/profile-form";
import { cookies } from "next/headers";

export default async function ProfilePage() {
	const cookieStore = await cookies();
    console.log("cookies", cookieStore.getAll());
	const userId = cookieStore.get("ld_userid");
	const token = cookieStore.get("ld_token");

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



































