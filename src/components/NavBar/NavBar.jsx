import React from "react";
import { links } from "../../data/links";
import { motion } from "framer-motion";

export default function NavBar() {
	const mappedLinks = links.map((link, index) => (
		<li className="nav-item">
			<motion.a
				key={index}
        className={`mx-1 nav-link ${link.customStyle}`}
        aria-current="page"
				href={link.url}
				target="_blank"
				rel="noreferrer"
				whileHover={{ scale: 1.1, opacity: 1 }}
				whileTap={{ scale: 0.9 }}
			>
				<span>{link.text}</span>
			</motion.a>
		</li>
	));

	return (
		<nav className="navbar navbar-expand justify-content-end">
			<div id="#top" className="container-fluid">
				{/* LOGO */}
				<a className="navbar-brand" href="#top">
					Tatia Burdett
				</a>

				{/* LINKS */}
        <ul className="navbar-nav">{mappedLinks}</ul>
			</div>
		</nav>
	);
}
