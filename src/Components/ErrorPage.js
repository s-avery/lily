const ErrorPage = () => {
	return (
		<main className="error">
			<Link to="/" className="homeButton">
				home
			</Link>

			<h2>this should not have happened.</h2>
			<img src={angy} alt="angry paisley pudge" className="angy" />
			<p className="error__text">
				you're on a page that doesn't exist. go{" "}
				<Link to="/" className="error__text">
					back
				</Link>
				.
			</p>
		</main>
	);
};

export default ErrorPage;
