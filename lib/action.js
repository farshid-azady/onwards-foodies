"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
	return !text || text.trim() === "";
};

export async function ShareMeal(prevState, formData) {
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

	// Check for invalid inputs on form validation
	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator) ||
		!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(meal.email) ||
		!meal.image ||
		meal.image.size === 0
	) {
		return { message: "Invalid input!" };
	}

	// Send form data to server for sharing
	await saveMeal(meal);
	revalidatePath("/meals", "layout");
	redirect("/meals");
}
