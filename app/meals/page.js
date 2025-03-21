import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

async function MealsPage() {
	const meals = await getMealsFromDatabase();

	return (
		<>
			<header className={classes.header}>
				<h1>
					New Tech In Apadana Programming{" "}
					<span className={classes.highlight}>You Can Learn It.</span>
				</h1>
				<p>Find Your Way To Progress in Your Life.</p>
				<p className={classes.cta}>
					<Link href="/meals/share">Share Your Favorite in Programming.</Link>
				</p>
			</header>
			<main className={classes.main}>
				<MealsGrid meals={meals} /> 
			</main>
		</>
	);
}

export default MealsPage;
