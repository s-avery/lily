import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/" className="button">
							Home
						</Link>
					</li>
					<li>
						<Link to="/Works" className="button">
							Works
						</Link>
					</li>
					<li>
						<Link to="/Contact" className="button">
							Contact
						</Link>
					</li>
				</ul>
			</nav>

			<h2>Lily Alexandre</h2>
		</header>
	);
};

export default Header;
