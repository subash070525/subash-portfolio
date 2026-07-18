import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <p className="section-label reveal">
          GET TO KNOW ME
        </p>

        <h2 className="reveal delay-1">
          About Me
        </h2>

        <div className="about-content">

          <div className="about-text reveal-left delay-2">

            <h3>
              Building ideas into{' '}
              <span>digital experiences.</span>
            </h3>

            <p>
              I'm Subash N, an Information Technology graduate with a
              passion for software development and building practical
              technology solutions.
            </p>

            <p>
              I enjoy working with Java, web technologies, databases,
              and modern development tools. I'm continuously improving
              my skills and exploring new technologies to become a
              better software engineer.
            </p>

          </div>

          <div className="about-details">

            <div className="detail-card reveal-right delay-2">
              <h4>Education</h4>
              <p>B.Tech Information Technology</p>
            </div>

            <div className="detail-card reveal-right delay-3">
              <h4>Focus</h4>
              <p>Software Development</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About