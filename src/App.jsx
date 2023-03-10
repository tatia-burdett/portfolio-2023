import "./App.css";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Social from "./components/Social/Social";

function App() {
	return (
		<div className="App vh-100 container">
			<NavBar />
			<About />
			<Social />
		</div>
	);
}

export default App;
