import React from "react";
import { socials } from "../../data/socials"
import { motion } from "framer-motion";

export default function Social() {

	const mapped = socials.map((platform, index) => (
		<motion.a
			key={index}
			className="btn btn-dark px-4"
			href={platform.url}
      target="_blank"
			rel="noreferrer"
			initial={{ opacity: 0.6 }}
			animate={{ opacity: 1 }}
			whileHover={{ scale: 1.1, opacity: 1 }}
			whileTap={{ scale: 1 }}
		>
			<motion.i className={`fs-2 bi ${platform.icon}`}></motion.i>
		</motion.a>
	));

	return (
		<div className="my-5 m-0 p-0 text-center">
			<motion.div
				className="btn-group"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, scale: [0.8, 1] }}
				transition={{ duration: 1 }}
			>{mapped}</motion.div>
		</div>
	);
}
