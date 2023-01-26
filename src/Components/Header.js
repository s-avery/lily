import { Link } from "react-router-dom";
import Home from "./Home";
import Works from "./Works";
import Contact from "./Contact";

const Header = () => {
	return (
		<header>
			<h1>Lily Alexandre</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Works">Works</Link>
					</li>
					<li>
						<Link to="/Contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
