import "./Styles/App.scss";
import Home from "./Components/Home";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import ErrorPage from "./Components/ErrorPage";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			`
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Works" element={<Works />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;

