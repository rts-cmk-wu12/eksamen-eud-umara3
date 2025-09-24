// copy this from my classwork

"use server";

export default async function SearchAction(prevState, formData) {
	//const keyword = formData.get("keyword");
	const { keyword } = Object.fromEntries(formData);

	// validering, måske?

	const response = await fetch(`http://localhost:4000/api/v1/listings`);
	if (!response.ok) {
		return {
			status: "NÆH!"
		};
	}

	const json = await response.json();

	const filteredData = json.filter(listings => (listings.title.toLowerCase().includes(keyword.toLowerCase())
		|| listings.description.toLowerCase().includes(keyword.toLowerCase()))
		|| listings.description.toLowerCase().includes(keyword.toLowerCase()))
		||listings.asset?.url === keyword
		//|| (activity.minAge <= keyword && activity.maxAge >= keyword)));

       

	return filteredData;
}