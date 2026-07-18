import './Projects.css'

function Projects() {
  const projects = [
    {
      number: '01',
      title: 'NAMMAMED',
      category: 'Web Application',
      description:
        'An online pharmacy platform that allows users to browse and purchase medicines while providing administrators with tools to manage products, stock, and customer orders.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/subash070525/E-commerce-website-for-medicine',
    },
    {
      number: '02',
      title: 'React E-Commerce',
      category: 'React Application',
      description:
        'A responsive e-commerce application featuring dynamic product listings, category filtering, product details, and shopping cart management.',
      technologies: ['React', 'JavaScript', 'CSS', 'REST API'],
      link: 'https://github.com/subash070525/ecommerce-app',
    },
    {
      number: '03',
      title: 'Vehicle Detection in Low Visibility',
      category: 'IoT & Embedded System',
      description:
        'A radar-based detection system designed to identify vehicles and obstacles in low-visibility conditions such as fog, heavy rain, and nighttime environments.',
      technologies: [
        'Arduino',
        'Embedded C',
        'HLK-LD2420',
        '24GHz Radar',
      ],
    },
  ]

  const openProject = (link) => {
    if (!link) {
      return
    }

    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading reveal">
          <p className="section-label">
            SELECTED WORK
          </p>

          <h2>Featured Projects</h2>

          <p className="projects-intro">
            A collection of projects where I explored software development,
            modern web technologies, and solutions to real-world problems.
          </p>
        </div>

        <div className="projects-list">

          {projects.map((project, index) => (
            <article
              className={`project-card reveal-left delay-${index + 1} ${
                project.link ? 'clickable' : ''
              }`}
              key={project.number}
              onClick={() => openProject(project.link)}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

              {project.link && (
                <button
                  className="project-arrow"
                  type="button"
                  aria-label={`Open ${project.title}`}
                  onClick={(event) => {
                    event.stopPropagation()
                    openProject(project.link)
                  }}
                >
                  ↗
                </button>
              )}

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects