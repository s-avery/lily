import headshot from "../Assets/headshot.jpeg";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
	return (
		<>
			<Header />

			<main className="home">
				<div className="home__bio">
					<div className="home__bioImage">
						<img
							src={headshot}
							alt="Lily Alexandre smiling in a black cardigan standing among trees."
						/>
					</div>
					<div className="home__about">
						<h1>Lily Alexandre</h1>

						<p>
							Lily Alexandre is a filmmaker and writer based in
							Montreal. She makes video essays about art and
							gender in the algorithm-driven era. She edits for
							indie production company{" "}
							<a
								href="https://www.thelowerplateau.com/depanneur-films"
								target="_blank"
								rel="noopener noreferrer"
								className="noDecorationAnchor"
							>
								Depanneur Films
							</a>
							, including <em>Lia, 19</em> (spring 2023) and has directed
							several music videos.
						</p>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default Home;
