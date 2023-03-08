import React from "react";
import { socials } from "../../data/socials"

export default function Social() {

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

	return <div className="m-3 btn-group-vertical">{mapped}</div>;
}
