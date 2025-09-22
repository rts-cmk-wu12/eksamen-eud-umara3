
// this is from my class work

"use client";

import {useActionState,useEffect} from "react";
import loginAction from "./login-action";
import { redirect } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

export default function LoginForm() {
	const [formState, formAction, pending] = useActionState(loginAction);

	

    useEffect(function () {
		const id = pending ? toast.loading("Logger ind...", { toastId: "loader" }) : toast.dismiss();

		if (formState?.success) {
			toast.update("loader", {
				toastId: "loader",
				render: "Du er nu logget ind!",
				type: "success",
				isLoading: false,
				closeOnClick: false,
				hideProgressBar: true,
				position: "top-right"
			});
			/*setTimeout(function () {
				redirect("/profil");
			}, 2000);*/
		}
	}, [formState, pending]);

	return (
		<form action={formAction}>
			<div>
				<label>
					<span>Email</span>
					<input type="text" name="email" defaultValue={formState?.data?.email} />
					<span>{formState?.properties?.email?.errors}</span>
				</label>
			</div>
			<div>
				<label>
					<span>Password</span>
					<input type="password" name="password" defaultValue={formState?.data?.password} />
					<span>{formState?.properties?.password?.errors}</span>
				</label>
			</div>
			<div>{formState?.errors}</div>
			<button type="submit">Sing in</button>
			<ToastContainer />
		</form>
	);
}