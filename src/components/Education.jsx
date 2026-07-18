import './Education.css'

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">

        <div className="education-heading reveal">
          <p className="section-label">
            MY JOURNEY
          </p>

          <h2>Education</h2>

          <p className="education-intro">
            My academic journey in Information Technology and the foundation
            that shaped my interest in software development.
          </p>
        </div>

        <div className="education-timeline">

          <div className="education-item">

            <div className="timeline-marker reveal">
              <span></span>
            </div>

            <div className="education-card reveal-right delay-2">

              <div className="education-top">
                <span className="education-degree">
                  Bachelor's Degree
                </span>

                <span className="education-status">
                  Graduated
                </span>
              </div>

              <h3>
                B.Tech Information Technology
              </h3>

              <p className="education-college">
                Dr. M.G.R. Educational and Research Institute
              </p>

              <p className="education-description">
                Built a strong foundation in programming, databases,
                web technologies, software development, and computer
                science fundamentals while working on practical
                academic projects.
              </p>

              <div className="education-highlights">
                <span>Software Development</span>
                <span>Database Management</span>
                <span>Web Technologies</span>
                <span>Project Development</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Education