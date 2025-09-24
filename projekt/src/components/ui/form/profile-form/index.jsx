
//copy from my class work

"use client";

import { useActionState } from "react";
import profileAction from "./profile-action";

export default function ProfileForm({ profileData }) {
	//console.log(profileData);
    const [formState, formAction, pending] = useActionState(profileAction)

	return (
		<form action={formAction}>
			<div>
				<label>
					<span>Firstname</span>
					<input type="text" name="firstname" defaultValue={profileData.firstname}  />
                    <span>{formState?.properties?.firstname?.errors}</span>
				</label>
				
			</div>
			<div>
				<label>
					<span>Lastname</span>
					<input type="text" name="lastname" defaultValue={profileData.lastname} />
                     <span>{formState?.properties?.lastname?.errors}</span>
				</label>
				
			</div>
			<div>
				<label>
					<span>Email</span>
					<input type="text" name="email" defaultValue={profileData.email} />
                     <span>{formState?.properties?.email?.errors}</span>
				</label>
				
			</div>
			<div>
				<label>
					<span>Password</span>
					<input type="password" name="password" placeholder="....." />
                     <span>{formState?.properties?.password?.errors}</span>
				</label>
				
			</div>
            
            <button type="submit" disabled={pending}>
                {pending? "saving.." : "saved"}
                </button>
		</form>
	)
}




