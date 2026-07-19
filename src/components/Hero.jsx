function Hero() {
  return (
    <header id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="eyebrow">FRONTEND DEVELOPER</p>
          <h1>
            Hi, I'm<br />
            <span className="highlight-name">Zainab Khalid</span>
          </h1>
          <p className="tagline">
            Building clean, responsive web experiences with modern tools and thoughtful design.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-cta">Let's Connect</a>
            <a href="#projects" className="btn-outline">View Work</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-ring hero-ring-1"></div>
          <div className="hero-ring hero-ring-2"></div>
          <div className="hero-circle">ZK</div>
        </div>
      </div>
    </header>
  );
}

export default Hero;