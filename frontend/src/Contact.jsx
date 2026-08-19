import { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:8080/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            if (response.ok) {
                setSubmitted(true);

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                alert("Failed to send message.");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Could not connect to Spring Boot.");
        }
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
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />

                <textarea
                    rows="6"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">
                    Send Message
                </button>

            </form>

            {submitted && (
                <p className="success-message">
                    Message sent successfully! ✅
                </p>
            )}
        </section>
    );
}

export default Contact;
