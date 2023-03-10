import React from "react";
import { socials } from "../../data/socials"
import { motion, useScroll } from "framer-motion"

export default function Social() {
	const { scrollYProgress } = useScroll();

	const mapped = socials.map((platform, index) => (
		<a
			key={index}
			className="btn btn-outline-secondary"
			href={platform.url}
      target="_blank"
      rel="noreferrer"
		>
			<i className={`fs-2 bi ${platform.icon}`}></i>
		</a>
	));

	return (
		<div className="text-center m-5">
			<motion.div style={{ scaleX: scrollYProgress }} />
			<div className="btn-group">{mapped}</div>
		</div>
	);
}
