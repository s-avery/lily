import Header from "./Header";
import Footer from "./Footer";
import placeholder from "../Assets/placeholder.png";

const Works = () => {
	return (
		<>
			<Header />

			<main>
				<div className="works__eyecatchers">
					<h2>The Specials</h2>
					<div className="works__thumbnail">
						<img src={placeholder} alt="" />
					</div>

					<div className="works__thumbnail">
						<img src={placeholder} alt="" />
					</div>

					<div className="works__thumbnail">
						<img src={placeholder} alt="" />
					</div>
				</div>

				<div className="works__list">
					<h2>Other Works</h2>

					<div className="works__essays">
						<h3>Video Essays</h3>
						<ul>
							<li>
								<p>example</p>
							</li>
						</ul>
					</div>

					<div className="works__directed">
						<h3>Directed</h3>
						<ul>
							<li>
								<p>example</p>
							</li>
						</ul>
					</div>

					<div className="works__edited">
						<h3>Edited</h3>
						<ul>
							<li>
								<p>example</p>
							</li>
						</ul>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default Works;
