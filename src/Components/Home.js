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
							According to all known laws of aviation, there is no
							way that a bee should be able to fly. Its wings are
							too small to get its fat little body off the ground.
							The bee, of course, flies anyway because bees don't
							care what humans think is impossible.
						</p>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default Home;
