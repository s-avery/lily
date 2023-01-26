import placeholder from "../Assets/placeholder.png";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
	return (
		<>
			<Header />

			<main>
				<div class="home__image">
					<img src="./placeholder.png" alt="Lily Alexandre" />
				</div>
				<div class="home__bio">
					<h2>Lily Alexandre</h2>
					<div className="home__bioImage">
						<img src={placeholder} alt="" />
					</div>
					<div className="home__about">
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
