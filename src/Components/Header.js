// !Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
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

				{/* mobile nav */}
				{showMobileNav ? (
					// mobile dropdown nav
					<div className="header__mobileNav">
						{/* close menu button */}
						<div
							className="header__mobileNavCloseButton button"
							onClick={toggleMobileNav}
						>
							X
						</div>

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

						<div class="header__mobileNavSocials">
							<a
								href="https://twitter.com/lily_lxndr/"
								target="_blank"
								rel="noopener noreferrer"
								className="socialsIcon"
							>
								<FontAwesomeIcon
									icon={faTwitter}
								></FontAwesomeIcon>
							</a>
							<a
								href="https://www.youtube.com/@lily_lxndr"
								target="_blank"
								rel="noopener noreferrer"
								className="socialsIcon"
							>
								<FontAwesomeIcon
									icon={faYoutube}
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
				) : (
					// button to dropdown menu
					<div
						className="header__mobileNavButton button"
						onClick={toggleMobileNav}
					>
						<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
					</div>
				)}
			</nav>

			<h2>Lily Alexandre</h2>

			<div class="header__socialIcons">
				<a
					href="https://twitter.com/lily_lxndr/"
					target="_blank"
					rel="noopener noreferrer"
					className="socialsIcon button"
				>
					<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
				</a>
				<a
					href="https://www.youtube.com/@lily_lxndr"
					target="_blank"
					rel="noopener noreferrer"
					className="socialsIcon button"
				>
					<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
				</a>
			</div>
		</header>
	);
};

export default Header;
