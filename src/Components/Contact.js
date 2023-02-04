import Header from "./Header";
import Footer from "./Footer";
import placeholder from "../Assets/placeholder.png";

const Contact = () => {
	return (
		<>
			<Header />

			<main>
				<h2>Contact</h2>

				<div className="contact__image">
					<img src={placeholder} alt="placeholder" />
				</div>

				<div className="contact__form">
					<p>
						The best way to get in touch is through this form. I’ll
						try to get back to you within a week, but sometimes take
						longer.
					</p>
					<iframe
						src="https://docs.google.com/forms/d/e/1FAIpQLSecaknMnVD03p2U7etrIgxcHs6DJaSu1yeIlmtVsayjQaexiQ/viewform?embedded=true"
						width="640"
						height="673"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
					>
						Loading…
					</iframe>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default Contact;
