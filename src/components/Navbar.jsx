import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      navItems.forEach((item) => {
        const section = document.getElementById(item.id)

        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(item.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (id) => {
    setActiveSection(id)
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      <a
        href="#home"
        className="logo"
        onClick={() => handleNavClick('home')}
      >
        Subash<span>.N</span>
      </a>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>

        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              activeSection === item.id
                ? 'active-link'
                : ''
            }
            onClick={() => handleNavClick(item.id)}
          >
            {item.name}
          </a>
        ))}

      </div>

      <button
        className={`menu-button ${menuOpen ? 'active' : ''}`}
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  )
}

export default Navbar