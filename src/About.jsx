function About() {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>

            <p>
                I am a Computer Science Engineering student interested in
                software development, full-stack development, and problem solving.
            </p>

            <div className="about-cards">
                <div>
                    <h3>🎓 Education</h3>
                    <p>Computer Science Engineering</p>
                </div>

                <div>
                    <h3>💻 Development</h3>
                    <p>Frontend & Backend Development</p>
                </div>

                <div>
                    <h3>📚 Learning</h3>
                    <p>C++ | Java | React | Spring Boot</p>
                </div>

                <div>
                    <h3>🎯 Goal</h3>
                    <p>Become a Full Stack Developer</p>
                </div>
            </div>
        </section>
    );
}

export default About;