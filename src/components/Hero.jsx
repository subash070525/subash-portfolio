import { useEffect, useState } from 'react'
import './Hero.css'

function Hero() {
  const roles = [
    'Software Engineer',
    'Java Developer',
    'Frontend Developer',
    'Full Stack Developer',
  ]

  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((previousIndex) =>
        previousIndex === roles.length - 1
          ? 0
          : previousIndex + 1
      )
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="home">

      {/* BACKGROUND EFFECTS */}

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-grid"></div>

      {/* HERO CONTENT */}

      <div className="hero-content">

        {/* AVAILABILITY STATUS */}

        <div className="hero-status">
          <span className="status-dot"></span>
          Open to opportunities
        </div>

        {/* INTRODUCTION */}

        <p className="hero-intro">
          Hello, I'm
        </p>

        {/* NAME */}

        <h1 className="hero-name">
          Subash <span>N</span>
        </h1>

        {/* ANIMATED ROLE */}

        <div className="hero-role-container">

          <span className="role-prefix">
            I'M A
          </span>

          <h2
            className="animated-role"
            key={roleIndex}
          >
            {roles[roleIndex]}
          </h2>

        </div>

        {/* DESCRIPTION */}

        <p className="hero-description">
          Information Technology graduate passionate about building
          modern applications, creating digital experiences, and
          solving real-world problems through technology.
        </p>

        {/* HERO BUTTONS */}

        <div className="hero-buttons">

          {/* PROJECTS */}

          <a
            href="#projects"
            className="primary-btn"
          >
            <span>View My Work</span>
            <span className="button-arrow">↗</span>
          </a>

          {/* CONTACT */}

          <a
            href="#contact"
            className="secondary-btn"
          >
            Let's Talk
          </a>

          {/* DOWNLOAD RESUME */}

          <a
            href="/Subash_Resume.pdf"
            download="Subash_N_Resume.pdf"
            className="resume-btn"
          >
            <span>Download Resume</span>
            <span className="download-icon">↓</span>
          </a>

        </div>

        {/* TECHNOLOGIES */}

        <div className="hero-tech">

          <span>JAVA</span>
          <div></div>

          <span>REACT</span>
          <div></div>

          <span>JAVASCRIPT</span>
          <div></div>

          <span>SQL</span>

        </div>

      </div>

      {/* SCROLL INDICATOR */}

      <a
        href="#about"
        className="scroll-indicator"
        aria-label="Scroll to about section"
      >
        <span>SCROLL</span>

        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>
      </a>

    </section>
  )
}

export default Hero