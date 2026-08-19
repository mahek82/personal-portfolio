import { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>

            <p>
                Have a project idea or want to connect? Send me a message.
            </p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    required
                />

                <input
                    type="text"
                    placeholder="Subject"
                    required
                />

                <textarea
                    rows="6"
                    placeholder="Your Message"
                    required
                ></textarea>

                <button type="submit">
                    Send Message
                </button>
            </form>

            {submitted && (
                <p className="success-message">
                    Message submitted successfully! ✅
                </p>
            )}
        </section>
    );
}

export default Contact;