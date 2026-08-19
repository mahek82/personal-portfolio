function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>

            <div className="project-container">

                <div className="project-card">
                    <p className="project-kicker">01 / FULL STACK</p>
                    <h3>Student Management System</h3>

                    <p>
                        A system for managing student information, records,
                        and academic details.
                    </p>

                    <p>
                        <strong>Technologies:</strong> React, Spring Boot, MongoDB
                    </p>

                    <div>
                        <a href="https://github.com/mahek82/personal-portfolio" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>

                        <a href="https://mahek82.github.io/personal-portfolio/" target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </div>
                </div>


                <div className="project-card">
                    <p className="project-kicker">02 / ANALYTICS</p>
                    <h3>Banking Performance Dashboard</h3>

                    <p>
                        A dashboard for analyzing banking performance,
                        transactions, loans, deposits, and business metrics.
                    </p>

                    <p>
                        <strong>Technologies:</strong> Excel, Power BI
                    </p>

                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </div>
                </div>


                <div className="project-card">
                    <p className="project-kicker">03 / BACKEND</p>
                    <h3>Library Management System</h3>

                    <p>
                        A simple application for managing books,
                        students, borrowing, and returning books.
                    </p>

                    <p>
                        <strong>Technologies:</strong> Java, MongoDB
                    </p>

                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;