
"use server";


export default async function SearchAction(prevState, formData) {
	const { keyword } = Object.fromEntries(formData);
	const trimedKeyword = keyword?.trim().toLowerCase();

	if (!trimedKeyword || trimedKeyword.length <2) {
		return{
			status: "Please enter at least 2 characters",
		};
	}

	try{
		const response = await fetch(`http://localhost:4000/api/v1/listings`);
	if (!response.ok) {
		return {
			status: "Failed to find"
		};
	}
	
	const allProducts = await response.json();
	 const filltered = allProducts.filter((product)=>
		product.title?.toLowerCase().includes(trimedKeyword) ||
	 	product.description?.toLowerCase().includes(trimedKeyword) ||
		product.asset?.url === trimedKeyword 
	
	);
	return filltered;
} catch(error){
console.error("error - ",error);
return {status:"Error corrred in search"};
}
}