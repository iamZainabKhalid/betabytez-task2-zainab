function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav>
      <div className="logo">ZK</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;