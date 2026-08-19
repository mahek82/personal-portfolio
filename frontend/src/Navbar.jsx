function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav className="navbar">

            <h2>Mahek</h2>

            <div>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>

                <button
                    type="button"
                    onClick={() => setDarkMode(!darkMode)}
                    className="theme-button"
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </div>

        </nav>
    );
}

export default Navbar;