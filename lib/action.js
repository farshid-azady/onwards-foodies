"use server";

export async function ShareMeal(formData) {
	const meal = {
		name: formData.get("name"),
		email: formData.get("email"),
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};
	// Send form data to server for sharing
	console.log(meal);
}
