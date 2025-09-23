// copy this from my classwork

"use client";

import { useActionState, useEffect } from "react";
import SearchAction from "./search-action";

export default function SearchForm() {
	const [formState, formAction, pending] = useActionState(SearchAction);

	useEffect(function () {
		console.log(formState);
	}, [formState]);

	return (
		<>
			<form action={formAction}>
				<div>
					<label>
						<span>Søg</span>
						<input type="search" name="keyword" />
					</label>
				</div>
				<button type="submit">Søg</button>
			</form>
			{(Array.isArray(formState) && !formState?.length) && <div>Der er ingen resultater</div>}
			{formState?.map(listings => <div key={listings.id}>{listings.title}</div>)}
		</>
	);
}