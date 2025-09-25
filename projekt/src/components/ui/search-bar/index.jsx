// copy this from my classwork

"use client";

import { useActionState, useEffect } from "react";
import SearchAction from "./search-action";
import { IoIosSearch } from "react-icons/io";
import "./search.scss";

export default function SearchForm() {
	const [formState, formAction, pending] = useActionState(SearchAction);

	useEffect(function () {
		console.log(formState);
	}, [formState]);

	return (
		<div className="search">
			<form action={formAction} className="search-form">
				
			<label className="search-label">
						
			  <input type="search" name="keyword" placeholder="search" className="search-input" />
					
			  <button type="submit" className="search-button">
                <IoIosSearch />
			  </button>
			</label>
			</form>
			{(Array.isArray(formState) && !formState?.length) && <div>No results found</div>}
			{formState?.map(listings => <div key={listings.id}>{listings.title}</div>)}
		</div>
	);
}