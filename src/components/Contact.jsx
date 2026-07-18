import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSending(true)
    setStatus('')

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append(
      'access_key',
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    )

    formData.append(
      'subject',
      'New message from Subash Portfolio'
    )

    formData.append(
      'from_name',
      'Subash Portfolio'
    )

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      )

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading reveal">
          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's build something
            <span> great together.</span>
          </h2>

          <p className="contact-intro">
            I'm currently open to software development opportunities
            and collaborations. If you have an opportunity, a project,
            or simply want to connect, feel free to reach out.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info reveal-left delay-1">

            <p className="contact-small-title">
              CONTACT
            </p>

            <a
              href="mailto:subash070525@gmail.com"
              className="contact-email"
            >
              subash070525@gmail.com
            </a>

            <p className="contact-note">
              I'm always interested in hearing about new opportunities,
              interesting projects, and ways to collaborate.
            </p>

            <div className="social-links">

              <a
                href="https://www.linkedin.com/in/subashn7525"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/subash070525"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </div>

          <form
            className="contact-form reveal-right delay-2"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Your Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your opportunity or project..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSending}
            >
              {isSending ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <span>↗</span>
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="form-success">
                ✓ Message sent successfully! I'll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="form-error">
                Something went wrong. Please try again or contact me by email.
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  )
}

export default Contact