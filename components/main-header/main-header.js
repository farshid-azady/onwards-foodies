import Link from "next/link";
import React from "react";

import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

function MainHeader() {
	Image;
	return (
		<>
			<MainHeaderBackground />

			<header className={classes.header}>
				<Link className={classes.logo} href="/">
					<Image src={LogoImg} alt="Plate of Deliciuose Foods" priority />
					Next Level Foods Apadana
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<Link href="/meals">Meals Menu</Link>
						</li>

						<li>
							<Link href="/community">Meals Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default MainHeader;
