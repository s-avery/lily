import "./Styles/App.scss";
import Home from "./Components/Home";
import Works from "./Components/Works";
import Contact from "./Components/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			`<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Works" element={<Works />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;

