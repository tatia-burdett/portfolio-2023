import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Social from "./components/NavBar/Social/Social";

function App() {
  return (
    <div className="App">
      <div className="m-auto vh-100 bg-dark text-light">
        <NavBar />
        <Social />
      </div>
    </div>
  );
}

export default App;
