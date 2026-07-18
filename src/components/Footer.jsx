import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">

        <a href="#home" className="footer-logo">
          Subash<span>.N</span>
        </a>

        <p className="footer-text">
          Designed & Built by Subash N
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/subash070525"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/subashn7525"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:subash070525@gmail.com">
            Email
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Subash N. All rights reserved.
        </p>

        <a href="#home" className="back-to-top">
          Back to top <span>↑</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer