import { useEffect } from 'react'

function useScrollReveal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
      )

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px',
        }
      )

      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.classList.add('active')
        } else {
          observer.observe(element)
        }
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return null
}

export default useScrollReveal