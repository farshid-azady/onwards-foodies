"use client";
const { useFormStatus } = require("react-dom");

function MealsFormSbmit() {
	const { pending } = useFormStatus();
	return (
		<button type="submit" disabled={pending}>
		
			{pending ?'Submitting...' : 'Share Meal'}
		</button>
	);
}

export default MealsFormSbmit;
