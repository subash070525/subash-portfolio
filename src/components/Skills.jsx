import './Skills.css'

function Skills() {
  const skillGroups = [
    {
      title: 'Programming',
      skills: ['Java', 'JavaScript', 'C'],
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Backend',
      skills: ['Java', 'JDBC', 'Spring Boot', 'REST APIs'],
    },
    {
      title: 'Database',
      skills: ['SQL', 'MySQL'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading reveal">
          <p className="section-label">
            MY TOOLKIT
          </p>

          <h2>Skills & Technologies</h2>

          <p className="skills-description">
            Technologies and tools I use to build, learn, and solve
            real-world problems.
          </p>
        </div>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <div
              className={`skill-card reveal-scale delay-${Math.min(
                index + 1,
                5
              )}`}
              key={group.title}
            >

              <div className="skill-card-header">
                <span className="skill-dot"></span>
                <h3>{group.title}</h3>
              </div>

              <div className="skill-list">

                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills