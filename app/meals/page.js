import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMealsFromDatabase } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
	const meals = await getMealsFromDatabase();
	return <MealsGrid meals={meals} />;
}

async function MealsPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Apadana Programming On Access ...{""}
					<span className={classes.highlight}>You Can Learn The New Tech.</span>
				</h1>
				<p>Find Your Way To Progress in Your Life.</p>
				<p className={classes.cta}>
					<Link href="/meals/share">Share Your Favorite in Programming.</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}

export default MealsPage;
