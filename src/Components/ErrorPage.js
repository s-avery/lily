import { Link } from "react-router-dom";
import Header from "./Header";
const ErrorPage = () => {
	return (
		<>
			<Header />
			<main className="error">
				<h2>this should not have happened.</h2>
				<p className="error__text">
					you're on a page that doesn't exist. go{" "}
					<Link to="/" className="error__text">
						back
					</Link>
					.
				</p>
			</main>
		</>
	);
};

export default ErrorPage;
