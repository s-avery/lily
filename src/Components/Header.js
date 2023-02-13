import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	// *State Zone
	const [showMobileNav, setShowMobileNav] = useState(false);

	const toggleMobileNav = () => {
		// toggle state of if nav is shown or not
		setShowMobileNav(!showMobileNav);

		// gives header class for background color
		const nav = document.querySelector(".header__nav");
		nav.classList.toggle("header__nav--mobileNavToggled");
	};

	return (
		<header className="header">
			<nav className="header__nav">
				{/* ul if screen big enough */}
				<div className="header__desktopNav">
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
				</div>

				{/* menu button for mobile */}
				<div
					className="header__mobileNavButton button"
					onClick={toggleMobileNav}
				>
					Menu
				</div>

				{/* mobile nav */}
				{showMobileNav ? (
					<div className="header__mobileNav">
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
					</div>
				) : (
					""
				)}
			</nav>

			<h2>Lily Alexandre</h2>
		</header>
	);
};

export default Header;
