import Header from "./Header";
import contact from "../Assets/contact.jpg";
import { useEffect, useState } from "react";

const Contact = () => {
	useEffect(() => {
		setShowForm(false);
	}, []);

	// *State Zone
	const [showForm, setShowForm] = useState(false);

	const handleClick = () => {
		// toggles state of if form is shown or not
		setShowForm(!showForm);

		// toggles the "animation" class that css uses to make the form slide in
		const googleForm = document.querySelector(".contact__googleForm");
		googleForm.classList.toggle("contact__googleForm--animation");
	};

	return (
		<>
			<Header />
			<main className="contact">
				<h2>Contact</h2>
				<div className="contact__container">
					<div className="contact__image">
						<img
							src={contact}
							alt="Close-up of Lily Alexandre smiling. A tabby cat rubs its face against Lily's cheek, its head upside down, eyes closed, looking content."
						/>
					</div>

					<div className="contact__form">
						<p>
							The best way to get in touch is through this form.
							I’ll try to get back to you within a week, but
							sometimes take longer.
						</p>
						<p>
							For sponsorship inquiries, contact{" "}
							<a
								href="https://talent.nebula.tv/contact/"
								target="_blank"
								rel="noopener noreferrer"
								className="noDecorationAnchor"
							>
								Nebula Talent
							</a>
							.
						</p>
						<button className="button" onClick={handleClick}>
							{showForm ? "Hide Form" : "Show Form"}
						</button>

						<div className="contact__googleFormContainer">
							<iframe
								src="https://docs.google.com/forms/d/e/1FAIpQLSecaknMnVD03p2U7etrIgxcHs6DJaSu1yeIlmtVsayjQaexiQ/viewform?embedded=true"
								frameborder="0"
								marginheight="0"
								marginwidth="0"
								className="contact__googleForm contact__googleForm--animation"
								title="Lily Alexandre Contact Google Form"
							>
								Loading…
							</iframe>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Contact;
