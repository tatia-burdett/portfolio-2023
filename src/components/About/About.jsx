import React from "react";
import tpic from '../../media/tatia.png'

export default function About() {
	return (
		<div className="row">
			<div className="col-md-4 rounded rounded-3 shadow-sm">
				
				{/* TROLLFACE IMAGE */}
				<img
					className="img-fluid border rounded rounded-pill"
					src={tpic}
					alt="tatia"
				></img>
			</div>

			<div className="col-md-8 px-3">
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
