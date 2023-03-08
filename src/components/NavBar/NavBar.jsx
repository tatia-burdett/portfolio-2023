import React from "react";
import { links } from "../../data/links";

export default function NavBar() {
	const mappedLinks = links.map((link, index) => (
		<li className="nav-item">
			<a
				key={index}
        className={`nav-link ${link.customStyle}`}
        aria-current="page"
				href={link.url}
				target="_blank"
				rel="noreferrer"
			>
				<span>{link.text}</span>
			</a>
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
