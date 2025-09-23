// copy this from my classwork

"use server";

export default async function SearchAction(prevState, formData) {
	//const keyword = formData.get("keyword");
	const { keyword } = Object.fromEntries(formData);

	// validering, måske?

	const response = await fetch(`${process.env.API_BASE_URL}/listings`);
	if (!response.ok) {
		return {
			status: "NÆH!"
		};
	}

	const json = await response.json();

	const filteredData = json.filter(listings => (listings.title.toLowerCase().includes(keyword.toLowerCase())
		|| listings.description.toLowerCase().includes(keyword.toLowerCase())));
		//|| activity.weekday.toLowerCase().includes(keyword.toLowerCase())
		//|| activity.time === keyword
		//|| (activity.minAge <= keyword && activity.maxAge >= keyword)));

	return filteredData;
}