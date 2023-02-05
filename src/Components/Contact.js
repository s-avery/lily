import Header from "./Header";
import placeholder from "../Assets/placeholder.png";
import { useEffect, useState } from "react";
import { computeHeadingLevel } from "@testing-library/react";

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
		console.log(googleForm);
		googleForm.classList.toggle("contact__googleForm--animation");
	};

	return (
		<>
			<Header />
			<main className="contact">
				<h2>Contact</h2>
				<div className="contact__container">
					<div className="contact__image">
						<img src={placeholder} alt="placeholder" />
					</div>

					<div className="contact__form">
						<p>
							The best way to get in touch is through this form.
							I’ll try to get back to you within a week, but
							sometimes take longer.
						</p>
						<button className="button" onClick={handleClick}>
							{showForm ? "Hide Form" : "Show Form"}
						</button>

						<div className="contact__googleFormContainer">
							<iframe
								src="https://docs.google.com/forms/d/e/1FAIpQLSecaknMnVD03p2U7etrIgxcHs6DJaSu1yeIlmtVsayjQaexiQ/viewform?embedded=true"
								width="640"
								height="800"
								frameborder="0"
								marginheight="0"
								marginwidth="0"
								className="contact__googleForm contact__googleForm--animation"
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
