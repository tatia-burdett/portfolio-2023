import "./App.css";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Social from "./components/Social/Social";
import { motion } from "framer-motion";

function App() {
	const list = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	}

	const item = {
		visible: { opacity: 1,  },
		hidden: { opacity: 0, x: -100 },
	}

	return (
		<div className="App vh-100 container">

			{/* Nav */}
			<NavBar />
			
			{/* Main */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
				className="container p-5"
				variants={list}
			>
				<About />
				<Social />
				<Projects />
			</motion.div>

			{/* Footer */}


		</div>
	);
}

export default App;
