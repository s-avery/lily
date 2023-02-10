import Header from "./Header";
import directed from "../Assets/directed.png";
import edited from "../Assets/edited.jpeg";
import essay from "../Assets/essay.png";

const Works = () => {
	return (
		<>
			<Header />

			<main>
				<div className="works__eyecatchers">
					<h2>The Hits</h2>
					<div className="works__thumbnail">
						<a href="https://youtu.be/aLmgMjkOv7Q">
							<img
								src={essay}
								alt="The thumbnail for Lily's Video 'Zoopraxography for Lovers (Cinema’s First Kiss Was Between Two Women)'. Sepia cutout of kissing against a background of the ocean, with text reading 'Who were they?'"
							/>
						</a>
					</div>

					<div className="works__thumbnail">
						<a href="https://youtu.be/BN2QenJZj1c">
							<img
								src={directed}
								alt="The thumbnail for Lily's music video 'Pop Quiz' for Avery Lake. A woman in a basement holding her head at a weird angle, with glitchy video effects."
							/>
						</a>
					</div>

					<div className="works__thumbnail">
						<a href="https://www.thelowerplateau.com">
							<img
								src={edited}
								alt="The poster for the movie The Lower Plateau. A woman sitting glumy on a bench with a light blue background, a floating red balloon, and text reading 'The Lower Plateau'."
							/>
						</a>
					</div>
				</div>

				<div className="works__list">
					<h2>Selected Works</h2>

					<div className="works__essays">
						<h3>Video Essays</h3>
						<ul>
							<li>
								<p>Fear of Trans Bodies (2022)</p>
							</li>

							<li>
								<p>
									Zoopraxography for Lovers (Cinema’s First
									Kiss Was Between Two Women) (2022) --
									Nominated for
									<a href="https://www.bfi.org.uk/sight-and-sound/polls/best-video-essays-2022">
										{" "}
										best video essay 2022
									</a>
								</p>
							</li>

							<li>
								<p>What Are Women? (2021)</p>
							</li>

							<li>
								<p>
									Millions of Dead Genders: a MOGAI
									Retrospective (2021)
								</p>
							</li>
						</ul>
					</div>

					<div className="works__directed">
						<h3>Directed</h3>
						<ul>
							<li>
								<p>
									Trans Youth VS. Healthcare (3-part web
									series, 2022)
								</p>
							</li>

							<li>
								<p>Avery Lake - Pop Quiz (music video, 2022)</p>
							</li>
							<li>
								<p>
									Shades Lawrence - Formidable Time (music
									video, 2018)
								</p>
							</li>
							<li>
								<p>Red Cup Café (web series, 2017-2018)</p>
							</li>
						</ul>
					</div>

					<div className="works__edited">
						<h3>Edited</h3>
						<ul>
							<li>
								<p>Lia, 19 (short film, 2023)</p>
							</li>

							<li>
								<p>
									Ryan Stotland – Must Be Sigmund (music
									video, 2021)
								</p>
							</li>
							<li>
								<p>
									Ryan Stotland – That Kinda Freaked Me Out
									(music video, 2021)
								</p>
							</li>
							<li>
								<p>
									Absolutely Canadian: Absofreakinglutely
									(comedy special, 2020)
								</p>
							</li>
							<li>
								<p>The Lower Plateau (feature film, 2018)</p>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</>
	);
};

export default Works;
