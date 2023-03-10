import React from "react";

export default function About() {
	return (
		<div className="row">
			<div className="col text-center border">
				
				{/* TROLLFACE IMAGE */}
				<img
					className="img-fluid"
					src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png"
					alt="trollface"
				></img>
			</div>

			<div className="col-md-8 jus p-3">
				<h2 className="mt-5 text-center">Hi, I'm Tatia!</h2>
				<p className="p-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
					eligendi deserunt, rerum dolorum enim sunt. Cumque minus amet laborum?
					Fuga officiis omnis ipsam dignissimos atque magnam doloribus
					laudantium adipisci voluptate.
				</p>
			</div>
		</div>
	);
}
